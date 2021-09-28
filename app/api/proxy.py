from app import app
from app.api.errors import bad_request, error_response
from flask import jsonify, url_for, request, abort
import requests

result = {}


@app.route("/Calculator/GetCourses", methods=["POST"])
def getCourses():
    return jsonify(result)


@app.route("/Calculator/GetCourseFee", methods=["POST"])
def getCourseFee():
    if not request.json or not "feeCategory" in request.json:
        abort(400)
    # result = requests.post(
    #     url="https://www.fees.uwa.edu.au/Calculator/GetCourseFee", data=request.json
    # )
    print(request)
    return jsonify({"Nice": "Work"}), 200


@app.route("/Calculator/GetUnitInfo", methods=["POST"])
def getUnitInfo():

    return jsonify(result)


@app.route("/Calculator/GetUnitsForMajor", methods=["POST"])
def getUnitsForMajor():

    return jsonify(result)


@app.route("/Calculator/GetMajorsForCourse", methods=["POST"])
def getMajorsForCourse():

    return jsonify(result)


@app.route("/Calculator/GetFeeForMajor", methods=["POST"])
def getFeeForMajor():

    return jsonify(result)
