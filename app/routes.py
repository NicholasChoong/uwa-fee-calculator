from flask import render_template
from app import app
from app.controllers import UserControl
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from flask import jsonify, url_for, request, abort

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

    #startYear either 2020, 2021, 2021 on, Pre-2021
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

    stype = request.json['feeCategory']
    feeYear = request.json['feeYear']
    unit = request.json['unit']
    course = request.json['courseCode']
    startYear = request.json['year']

    #startYear either 2020, 2021, 2021 on, Pre-2021
    # remove "Starting " from startYear
    startYear = startYear[9:]

    unit.split('[')
    unitTitle = unit[0]
    unitCode = unit[1][:-1]

    pointInfo = units.query.filter_by(unit_code=unitCode, unit_title=unitTitle).all()

    if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
        clust = pointInfo.int_clust
    elif stype == 'DNA':
        clust = pointInfo.non_clust
    else:
        clust = pointInfo.dom_clust

    clustInfo = cluster.query.filter_by(cluster=clust, year=startYear)

    result = [{"creditpoint": pointInfo.creditPoint,
               "eftsl": pointInfo.creditPoints/48,
               "fee": clustInfo.fee}]
    
    return jsonify(result)


@app.route("/Calculator/GetUnitsForMajor", methods=["POST"])
def getUnitsForMajor():
    # if not request.json or not "majorCode" in request.json and not "feeYear" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitsForMajor", data=request.json
    )
    return jsonify(result.json()), 200


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
