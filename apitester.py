from app import app, db
from app.models import international, domesticPost, units
from app.api.errors import bad_request, error_response
from flask import jsonify, url_for, request


data = {}
data['student_type'] = 'INTUG'
#request.json['studentType']
data['fee_year'] = '2021'
#request.json['fee']

stype = data['student_type']
year = data['fee_year']

print('getting course list')

# International students
if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
    courses = {}
    courseList = international.query.all()

    for c in courseList:
        if c.course_title not in courses:
            courses[c.code] = c.course_title+' ['+c.code+']'
    print(courses)


