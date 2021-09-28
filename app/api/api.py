from app import app, db
from app.models import international, domesticPost, units
from app.api.errors import bad_request, error_response
from flask import jsonify, url_for, request

@app.route('/api/getcourses/', methods=['GET','POST'])
def list_courses():
    data = {}
    data['student_type'] = request.json['studentType']
    data['fee_year'] = request.json['feeYear']

    stype = data['student_type']
    year = data['fee_year']

    courses = {}
    years = []

    # International students
    if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
        courseList = international.query.all()

    # Domestic post
    elif stype == 'DPG':
        courseList = domesticPost.query.all()

    for c in courseList:
        if c.course_title not in courses:
            courses[c.course_code] = c.course_title+' ['+c.course_code+']'
        if c.start_year not in years:
            years.append(c.start_year)

    result = [courses, years]

    return jsonify(result)


@app.route('/api/getyearsforcourse/', methods=['GET','POST'])
def getYearsForCourse():
    data = {}
    data['student_type'] = request.json['studentType']
    data['course_code'] = request.json['courseCode']
    data['fee_year'] = request.json['feeYear']

    stype = data['student_type']
    courseCode = data['course_code']
    year = data['fee_year']

    years = []

    if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
        courseYears = international.query.filter_by(course_code=courseCode).all()
        
    elif stype == 'DPG':
        courseList = domesticPost.query.filter_by(course_code=courseCode).all()

    for c in courseYears:
        if c.start_year not in years:
            years.append(c.start_year)

    return jsonify(years)


@app.route('/api/getcoursefee/', methods=['GET', 'POST'])
def getCourseFee():
    stype = request.json['feeCategory']
    feeYear = request.json['feeYear']
    course = request.json['courseCode']
    startYear = request.json['year']

    if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
        courseInfo = international.query.filter_by(course_code=course, start_year=startYear).first()
        feePoint = courseInfo.total_fee/courseInfo.total_points
    elif stype == 'DPG':
        courseInfo = domesticPost.query.filter_by(course_code=course, start_year=startYear).first()
        feePoint = courseInfo.fee_per_point
    


    result = [{"course_name": courseInfo.courseTitle,
               "course_credit_point": courseInfo.total_points,
               "annual_credit_point": courseInfo.yearly_points,
               "fee_per_credit_point": feePoint,
               "fee": feePoint*courseInfo.yearly_points,
               "total_fee": courseInfo.total_fee}]
    
    return jsonify(result)

@app.route('/api/getunitinfo/', methods=['GET', 'POST'])
def getUnitInfo():
    stype = request.json['feeCategory']
    feeYear = request.json['feeYear']
    unit = request.json['unit']
    course = request.json['courseCode']
    startYear = request.json['year']

    unit.split('[')
    unitTitle = unit[0]
    unitCode = unit[1][:-1]

    pointInfo = units.query.filter_by(unit_code=unitCode, unit_title=unitTitle)

    result = [{"creditpoint": pointInfo.creditPoint,
               "eftsl": pointInfo.creditPoints/48}]
    
    return jsonify(result)