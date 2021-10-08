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
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetCourseFee", data=request.json
    )
    return jsonify(result.json()), 200


@app.route("/Calculator/GetUnitInfo", methods=["POST"])
def getUnitInfo():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitInfo", data=request.json
    )
    return jsonify(result.json()), 200


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
