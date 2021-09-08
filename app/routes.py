from flask import render_template, request, redirect, session, Flask, flash, url_for, jsonify
from app import app, db
from app.models import international, domesticPost
from app.controllers import UserControl
from werkzeug.urls import url_parse

# Route for the homepage
@app.route("/")
def start():
    UserControl.domesticPostData("domesticpost.xls")
    UserControl.internationalData("international.xls")
    return render_template("empty.html")

# Might require changes to course selection to be put to the next step instead
@app.route("/step1", methods= ["GET", "POST"])
def firstStep():
    if request.method == 'POST':
        data = {}
        data['student_type'] = request.json['studentType']
        data['course_title'] = request.json['selectedCourse']
        data['start_year'] = request.json['selectedYear']
        UserControl.firstStep(data)
    return redirect("to step 2")

# The following is required on the html to receive data here:
#    $.ajax({
#      contentType: 'application/json',
#      url: "{{ url_for('step1') }}",
#      type: 'POST',
#      data: JSON.stringify({'student_type': studentType, 'course_title': selectedCourse, 'start_year': selectedYear}),   // converts js value to JSON string
#    })
#    .done(function(result){     // on success get the return object from server
#      console.log(result)     // do whatever with it. In this case see it in console
#    })


# Might require changes: major to be conditional based on studentType or just check for None
@app.route("/step2", methods= ["GET", "POST"])
def secondStep():
    if request.method == 'POST':
        data = {}
        data['student_type'] = request.json['studentType']
        data['course_title'] = request.json['selectedCourse']
        data['major'] = request.json['selectedMajor']
        data['start_year'] = request.json['selectedYear']
        UserControl.secondStep(data)
    return redirect("to final step with fees")

# The following is required on the html to receive data here:
#    $.ajax({
#      contentType: 'application/json',
#      url: "{{ url_for('step2') }}",
#      type: 'POST',
#      data: JSON.stringify({'student_type': studentType, 'course_title': selectedCourse, 'major': selectedMajor,'start_year': selectedYear}),   // converts js value to JSON string
#    })
#    .done(function(result){     // on success get the return object from server
#      console.log(result)     // do whatever with it. In this case see it in console
#    })
