from flask import render_template
from app import app
from app.controllers import UserControl
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from flask import jsonify, url_for, request, abort
import string
import requests

# Route for the homepage
@app.route("/")
def home():
    return app.send_static_file("index.html")

# API to retrieve a list of courses based on student type (eg. international undergraduate, domestic undergraduate, etc)
@app.route("/Calculator/GetCourses", methods=["POST"])
def getCourses():
    if not request.json or not "feeCategory" in request.json:
        abort(400)

    # Initialising required input variables
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

    # Domestic post graduate students
    # Note: Domestic undergraduate students were not implemented due to lack of data available
    elif stype == "DFPG":
        courseList = domesticPost.query.all()

    # If student type if not supported by current database, retrieve courses from UWA's server with their API
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

# API that retrieves the fee of a specific course
@app.route("/Calculator/GetCourseFee", methods=["POST"])
def getCourseFee():
    if not request.json or not "feeCategory" in request.json:
        abort(400)

    # Initialising required input variables
    stype = request.json["feeCategory"]
    feeYear = request.json["feeYear"]
    course = request.json["courseCode"]
    startYear = request.json["year"]

    # startYear either 2020, 2021, 2021 on, Pre-2021
    # Remove "Starting " from startYear
    startYear = startYear[9:]

    # International students
    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        courseInfo = international.query.filter_by(
            course_code=course, start_year=startYear
        ).first()
        feePoint = courseInfo.total_fee / courseInfo.total_points

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
    # Domestic postgraduate fee paying students
    elif stype == "DFPG":
        courseInfo = domesticPost.query.filter_by(
            course_code=course, start_year=startYear
        ).first()
        feePoint = courseInfo.fee_per_point

        result = [
            {
                "course_name": courseInfo.course_title,
                "course_credit_point": courseInfo.total_points,
                "annual_credit_point": courseInfo.yearly_points,
                "fee_per_credit_point": round(feePoint, 2),
                "fee": round(feePoint * courseInfo.yearly_points, 2),
                "total_fee": courseInfo.total_points*courseInfo.fee_per_point,
            }
        ]
    # If student type if not supported by current database, retrieve courses from UWA's server with their API
    else:
        result = requests.post(
            url="https://www.fees.uwa.edu.au/Calculator/GetCourseFee", data=request.json
        )
        return jsonify(result.json()), 200

    return jsonify(result), 200

# API that retrieves the available years of a specific course
@app.route("/Calculator/getYearsForCourse", methods=["POST"])
def getYearsForCourse():
    # Initialising required input variables
    data = {}
    data["student_type"] = request.json["feeCategory"]
    data["course_code"] = request.json["courseCode"]
    data["fee_year"] = request.json["feeYear"]

    stype = data["student_type"]
    courseCode = data["course_code"]
    year = data["fee_year"]

    courseYears = []
    years = []

    # Interntional students
    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        courseYears = international.query.filter_by(course_code=courseCode).all()
    # Domestic postgraduate students
    elif stype == "DPG":
        courseYears = domesticPost.query.filter_by(course_code=courseCode).all()

    # Add all available years for the selected course to list
    for c in courseYears:
        if c.start_year not in years:
            years.append(c.start_year)

    return jsonify(years), 200

# API that retrieves all relevant unit information on the selected unit
@app.route("/Calculator/GetUnitInfo", methods=["POST"])
def getUnitInfo():
    # Initialising required input variables
    stype = request.json["feeCategory"]
    feeYear = request.json["feeYear"]
    unit = request.json["unit"]
    course = request.json["courseCode"]
    startYear = request.json["year"]

    # startYear either 2020, 2021, 2021 on, Pre-2021
    # Remove "Starting " from startYear
    startYear = startYear[9:]

    # Split the string into unit name and code respectively
    unitTitle = unit.split("[")[0][:-1]
    unitCode = unit.split("[")[1][:-1]

    pointInfo = units.query.filter_by(unit_title=unitTitle, unit_code=unitCode).first()

    # International students
    if stype == "INTUG" or stype == "INTPG" or stype == "INTHDR":
        clust = pointInfo.int_clust
    
    # Domestic non-award students
    #elif stype == "DNA":
    #   clust = pointInfo.non_clust
    #   print("CLUST VALUE IS: " + str(clust))
    
    # Fee paying and under graduate domestic students
    elif stype == "DFPG" or stype == "DUG":
        clust = pointInfo.dom_clust
    # Other students not within database
    else:
        result = requests.post(
            url="https://www.fees.uwa.edu.au/Calculator/GetUnitInfo", data=request.json
        )
        return jsonify(result.json()), 200

    clustInfo = cluster.query.filter_by(cluster=clust, year=startYear).first()

    result = [
        {
            "creditpoint": pointInfo.credit_points,
            "eftsl": pointInfo.credit_points / 48,
            "fee": clustInfo.fee,
        }
    ]

    return jsonify(result), 200

# API that retrieves all relevant and available units of a specific major
@app.route("/Calculator/GetUnitsForMajor", methods=["POST"])
def getUnitsForMajor():
    # Initialising required input variables
    data = {}
    data["major_name"] = request.json["majorName"]
    data["fee_year"] = request.json["feeYear"]

    mname = data["major_name"].split()
    fyear = data["fee_year"]

    redundant = [
        "AND",
        "STUDIES",
        "SCIENCE",
        "HUMAN",
        "RESOURCE",
        "RESOURCES",
    ]  # Any words that may cause unrelated units to show up

    # Remove punctuations from the major name
    for word in mname:
        word.replace(",", "")
        word.replace(":", "")
        if word.upper() in redundant:
            ref = mname.remove(word)

    foe_code = []
    result = {}

    # Creates a list of all data in the fieldOfEducation database table
    foeList = fieldOfEducation.query.all()

    # Compare broad and detailed discipline names with the major name selected
    for f in foeList:
        for name in mname:
            if (
                name.upper() in f.broad_dicsipline.upper()
                or name.upper() in f.detailed_discipline.upper()
            ):
                if f.field_code not in foe_code:
                    foe_code.append(f.field_code)

    for code in foe_code:
        field = fieldOfEducation.query.filter_by(field_code=code).first()

    # Search for other majors that may be relevant to the selected major
    all_related_majors = fieldOfEducation.query.filter_by(
        broad_dicsipline=field.broad_dicsipline
    )

    # Add foe codes of the relevant majors that are not in the list
    for majors in all_related_majors:
        if majors.field_code not in foe_code:
            foe_code.append(majors.field_code)

    unitList = []

    # Add units within the same field of education
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

# API proxies to UWA's server to get required major data for domestic undergraduates
@app.route("/Calculator/GetMajorsForCourse", methods=["POST"])
def getMajorsForCourse():
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetMajorsForCourse",
        data=request.json,
    )
    return jsonify(result.json()), 200

# API proxies to UWA's server to get required major fee data for domestic undergraduates
@app.route("/Calculator/GetFeeForMajor", methods=["POST"])
def getFeeForMajor():
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetFeeForMajor", data=request.json
    )
    return jsonify(result.json()), 200

# An error handler
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file("index.html")
