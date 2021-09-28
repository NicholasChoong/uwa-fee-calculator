from flask import render_template
from app import app
from app.controllers import UserControl
from flask import jsonify, url_for, request, abort

# Route for the homepage
@app.route("/")
def home():
    # UserControl.domesticPostData("domesticpost.xls")
    # UserControl.internationalData("international.xls")
    # UserControl.unitsData("units.xls")
    # return render_template("empty.html")
    return app.send_static_file("index.html")


import requests


@app.route("/Calculator/GetCourses", methods=["POST"])
def getCourses():
    if not request.json or not "feeCategory" in request.json:
        abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetCourses", data=request.json
    )
    return jsonify(result.json()[0]), 200


@app.route("/Calculator/GetCourseFee", methods=["POST"])
def getCourseFee():
    if not request.json or not "feeCategory" in request.json:
        abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetCourseFee", data=request.json
    )
    return jsonify(result.json()[0]), 200


@app.route("/Calculator/GetUnitInfo", methods=["POST"])
def getUnitInfo():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitInfo", data=request.json
    )
    return jsonify(result.json()[0]), 200


@app.route("/Calculator/GetUnitsForMajor", methods=["POST"])
def getUnitsForMajor():
    # if not request.json or not "majorCode" in request.json and not "feeYear" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetUnitsForMajor", data=request.json
    )
    return jsonify(result.json()[0]), 200


@app.route("/Calculator/GetMajorsForCourse", methods=["POST"])
def getMajorsForCourse():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetMajorsForCourse",
        data=request.json,
    )
    return jsonify(result.json()[0]), 200


@app.route("/Calculator/GetFeeForMajor", methods=["POST"])
def getFeeForMajor():
    # if not request.json or not "feeCategory" in request.json:
    #     abort(400)
    result = requests.post(
        url="https://www.fees.uwa.edu.au/Calculator/GetFeeForMajor", data=request.json
    )
    return jsonify(result.json()[0]), 200