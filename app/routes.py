from flask import render_template
from app import app
from app.controllers import UserControl
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from flask import jsonify, url_for, request, abort
import string

# Route for the homepage
@app.route("/")
def home():
    return app.send_static_file("index.html")


import requests


@app.route("/Calculator/GetCourses", methods=["POST"])
def getCourses():
    if not request.json or not "feeCategory" in request.json:
        abort(400)

    data = {}
    data["student_type"] = request.json["feeCategory"]
    data["fee_year"] = request.json["feeYear"]

    stype = data["student_type"]
    year = data["fee_year"]

    courses = {}
    years = []

    # International students
    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        courseList = international.query.all()

    # Domestic post
    elif stype == "DPG":
        courseList = domesticPost.query.all()

    # Not in database
    else:
        result = requests.post(
            url="https://www.fees.uwa.edu.au/Calculator/GetCourses", data=request.json
        )
        return jsonify(result.json()), 200

    for c in courseList:
        if c.course_title not in courses:
            courses[c.course_code] = c.course_title + " [" + c.course_code + "]"
        if c.start_year not in years:
            years.append(c.start_year)

    result = [courses, years]

    return jsonify(result), 200


@app.route("/Calculator/GetCourseFee", methods=["POST"])
def getCourseFee():
    if not request.json or not "feeCategory" in request.json:
        abort(400)

    stype = request.json["feeCategory"]
    feeYear = request.json["feeYear"]
    course = request.json["courseCode"]
    startYear = request.json["year"]

    # startYear either 2020, 2021, 2021 on, Pre-2021
    # remove "Starting " from startYear
    startYear = startYear[9:]

    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        courseInfo = international.query.filter_by(
            course_code=course, start_year=startYear
        ).first()
        feePoint = courseInfo.total_fee / courseInfo.total_points
    elif stype == "DPG":
        courseInfo = domesticPost.query.filter_by(
            course_code=course, start_year=startYear
        ).first()
        feePoint = courseInfo.fee_per_point
    # Not in database
    else:
        result = requests.post(
            url="https://www.fees.uwa.edu.au/Calculator/GetCourseFee", data=request.json
        )
        return jsonify(result.json()), 200

    result = [
        {
            "course_name": courseInfo.course_title,
            "course_credit_point": courseInfo.total_points,
            "annual_credit_point": courseInfo.yearly_points,
            "fee_per_credit_point": round(feePoint, 2),
            "fee": round(feePoint * courseInfo.yearly_points, 2),
            "total_fee": courseInfo.total_fee,
        }
    ]

    return jsonify(result), 200


@app.route("/Calculator/GetUnitInfo", methods=["POST"])
def getUnitInfo():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    """
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitInfo", data=request.json
    )
    return jsonify(result.json()), 200
    """

    stype = request.json["feeCategory"]
    feeYear = request.json["feeYear"]
    unit = request.json["unit"]
    course = request.json["courseCode"]
    startYear = request.json["year"]

    # startYear either 2020, 2021, 2021 on, Pre-2021
    # remove "Starting " from startYear
    startYear = startYear[9:]

    unitTitle = unit.split("[")[0][:-1]
    unitCode = unit.split("[")[1][:-1]

    pointInfo = units.query.filter_by(unit_title=unitTitle, unit_code=unitCode).first()

    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        clust = pointInfo.int_clust
    elif stype == "DNA":
        clust = pointInfo.non_clust
    else:
        clust = pointInfo.dom_clust

    clustInfo = cluster.query.filter_by(cluster=clust, year=startYear).first()

    result = [
        {
            "creditpoint": pointInfo.credit_points,
            "eftsl": pointInfo.credit_points / 48,
            "fee": clustInfo.fee,
        }
    ]

    return jsonify(result), 200


@app.route("/Calculator/GetUnitsForMajor", methods=["POST"])
def getUnitsForMajor():
    # if not request.json or not "majorCode" in request.json and not "feeYear" in request.json:
    #     abort(400)
    """
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitsForMajor", data=request.json
    )
    return jsonify(result.json()), 200
    """

    data = {}
    data["major_name"] = request.json["majorName"]
    data["fee_year"] = request.json["feeYear"]

    mname = data["major_name"].split()
    fyear = data["fee_year"]

    redundant = ["AND", "STUDIES", "SCIENCE", "HUMAN", "RESOURCE", "RESOURCES"] # Any words that may cause unrelated units to show up

    # Remove punctuations
    for word in mname:
        word.replace(',', '')
        if word.upper() in redundant:
            ref = mname.remove(word)
            # print("Removed a word")

    foe_code = []
    result = {}

    foeList = fieldOfEducation.query.all()

    for f in foeList:
        for name in mname:
            if (name.upper() in f.broad_dicsipline.upper() and name.upper() not in redundant) or (name.upper() in f.detailed_discipline.upper() and name not in redundant):
                if f.field_code not in foe_code:
                    # print(name + " provided an foe")
                    foe_code.append(f.field_code)

    for code in foe_code:
        field = fieldOfEducation.query.filter_by(field_code=code).first()

    all_related_majors = fieldOfEducation.query.filter_by(broad_dicsipline=field.broad_dicsipline)

    for majors in all_related_majors:
        if majors.field_code not in foe_code:
            foe_code.append(majors.field_code)
            # print("current foe provided other possible related majors")

    unitList = []

    # Add units within the field of education
    for code in foe_code:
        unitList += units.query.filter_by(foe=code).all()

    for u in unitList:
        if u.unit_title not in result:
            result[u.unit_code] = u.unit_title + " [" + u.unit_code + "]"

    # Add all other units
    fullList = units.query.all()
    
    for u in fullList:
        if u.unit_title not in result:
            result[u.unit_code] = u.unit_title + " [" + u.unit_code + "]"

    res = [result]

    return jsonify(res), 200


@app.route("/Calculator/GetMajorsForCourse", methods=["POST"])
def getMajorsForCourse():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetMajorsForCourse",
        data=request.json,
    )
    return jsonify(result.json()), 200


@app.route("/Calculator/GetFeeForMajor", methods=["POST"])
def getFeeForMajor():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetFeeForMajor", data=request.json
    )
    return jsonify(result.json()), 200
