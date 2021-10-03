from app import app, db
from app.models import international, domesticPost, units
from app.api.errors import bad_request, error_response
from flask import jsonify, url_for, request

with app.app_context():

    # Mimicking data usage and assignment for webpage implementation
    data = {}
    data['student_type'] = 'DPG' #request.json['studentType']
    data['fee_year'] = '2021' #request.json['fee']

    stype = data['student_type']
    year = data['fee_year']

    def getCourses(stype, year):
        print('getting course list')
        courses = {}
        years = []
        # International students
        if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
            courseList = international.query.all()
        
        # Domestic undergrad
        if stype == 'DPG':
            courseList = domesticPost.query.all()

            for c in courseList:
                if c.course_title not in courses:
                    courses[c.course_code] = c.course_title+' ['+c.course_code+']'
                # May include 'and int(year) - c.start_year <= 3' in the conditional
                if c.start_year not in years:
                    years.append(c.start_year)

            result = [courses, years]

            print(result)


    def getYearsForCourse(stype, courseCode, year):
        years = []

        if stype == 'INTUG' or stype == 'INTPG' or stype == 'INTHDR':
            courseYears = international.query.filter_by(course_code=courseCode).all()
        
        elif stype == 'DPG':
            courseYears = domesticPost.query.filter_by(course_code=courseCode).all()

        for c in courseYears:
            if c.start_year not in years:
                years.append(c.start_year)

        print(years)

    # Insert test functions here
    #getCourses(stype, year)
    getYearsForCourse('INTPG', 'BH004', '2021') # Test with :('INTPG', 'BH004', '2021') ('DPG', '00200', '2021')