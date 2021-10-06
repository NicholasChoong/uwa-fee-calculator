from app import app, db
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from app.api.errors import bad_request, error_response
from flask import jsonify, url_for, request


@app.route("/api/getcourses/", methods=["GET", "POST"])
def getCourses():
    data = {}
    data["student_type"] = request.json["studentType"]
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

    for c in courseList:
        if c.course_title not in courses:
            courses[c.course_code] = c.course_title + " [" + c.course_code + "]"
        if c.start_year not in years:
            years.append(c.start_year)

    result = [courses, years]

    return jsonify(result)


@app.route("/api/getyearsforcourse/", methods=["GET", "POST"])
def getYearsForCourse():
    data = {}
    data["student_type"] = request.json["studentType"]
    data["course_code"] = request.json["courseCode"]
    data["fee_year"] = request.json["feeYear"]

    stype = data["student_type"]
    courseCode = data["course_code"]
    year = data["fee_year"]

    years = []

    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        courseYears = international.query.filter_by(course_code=courseCode).all()

    elif stype == "DPG":
        courseList = domesticPost.query.filter_by(course_code=courseCode).all()

    for c in courseYears:
        if c.start_year not in years:
            years.append(c.start_year)

    return jsonify(years)


@app.route("/api/getcoursefee/", methods=["GET", "POST"])
def getCourseFee():
    stype = request.json["feeCategory"]
    feeYear = request.json["feeYear"]
    course = request.json["courseCode"]
    startYear = request.json["year"]

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

    result = [
        {
            "course_name": courseInfo.courseTitle,
            "course_credit_point": courseInfo.total_points,
            "annual_credit_point": courseInfo.yearly_points,
            "fee_per_credit_point": feePoint,
            "fee": feePoint * courseInfo.yearly_points,
            "total_fee": courseInfo.total_fee,
        }
    ]

    return jsonify(result)


@app.route('/api/getunitinfo/', methods=['GET', 'POST'])
def getUnitInfo():
    stype = request.json['feeCategory']
    feeYear = request.json['feeYear']
    unit = request.json['unit']
    course = request.json['courseCode']
    startYear = request.json['year']
    #startYear either 2020, 2021, 2021 on, Pre-2021

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

#Note: Major name is used for the API instead of Major code
@app.route("/api/getunitsformajor/", methods=["GET", "POST"])
def getUnitsForMajor():
    data = {}
    data["major_name"] = request.json["majorName"]
    data["fee_year"] = request.json["feeYear"]

    mname = data["major_name"]
    fyear = data["fee_year"]

    redundant = ["AND", "STUDIES"]

    foe_code = []
    units = {}

    foeList = fieldOfEducation.query.all()

    for f in foeList:
        for name in mname:
            if (name.upper() in f.broad_dicsipline.upper() and name.upper() not in redundant) or (name.upper() in f.detailed_dicsipline.upper() and name not in redundant):
                if f.field_code not in foe_code:
                    foe_code.append(f.field_code)

    unitList = []

    # Add units within the field of education
    for code in foe_code:
        unitList += units.query.filter_by(foe=code).all()

    for u in unitList:
        if u.unit_title not in units:
            units[c.unit_code] = c.course_title 

    # Add all other units
    fullList = units.query.all()

    for u in fullList:
        if u.unit_title not in units:
            units[c.unit_code] = c.course_title


    return jsonify(units)
