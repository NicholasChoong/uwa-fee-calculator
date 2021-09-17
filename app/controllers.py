from app import app, db
from app.models import international, domesticPost, units
from flask import render_template, request, redirect, session, flash, url_for, redirect, flash, request
import xlrd

class UserControl():

    def internationalData(excelFileName):
        location = "app/data/" + excelFileName
        
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) #(0, 0) refers to the top left most cell

        #sheet.ncols for columns and sheet.nrows for rows

        data = []

        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))
        
        for i in range(len(data)):
            cd = data[i][0]
            vn = data[i][1]
            usc = data[i][2]
            cr = data[i][3]
            ti = data[i][4]
            su = data[i][5]
            st = data[i][6]
            ex = data[i][7]
            tp = data[i][9]
            yp = data[i][10]
            ct = data[i][24]
            co = data[i][27]
            # checks if the course is available from availability and fee columns
            for j in range(3):
                if data[i][21+j] == "Available":
                    sy = 2019+j
                    fee = sheet.cell(i+1, 14+2*j)
                    if fee.ctype == xlrd.XL_CELL_EMPTY:
                        fee = -1
                    else:
                        fee = data[i][14+2*j]
                    av = data[i][21+j]
                    d = international(code=cd, version_number=vn, unit_set_code= usc, cricos=cr, course_title=ti,
                    status = su, start_date=st, expiry_date =ex, total_points=tp, yearly_points=yp, start_year=sy,
                    total_fee=fee, availability=av, course_type=ct, course_owner=co)
                    db.session.add(d)
        db.session.commit()
        return

    def domesticPostData(excelFileName):
        #location = "data/domesticpost.xls"
        location = "app/data/" + excelFileName

        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) #(0, 0) refers to the top left most cell

        data = []

        #sheet.ncols for columns and sheet.nrows for rows

        for i in range(2, sheet.nrows):
            data.append(sheet.row_values(i))

        for i in range(len(data)):
            fc = data[i][1]
            ct = data[i][2]
            cc = data[i][3]
            vn = data[i][4]
            tp = data[i][5]
            yp = data[i][6]
            sy = data[i][7]
            fpp = data[i][8]

            d = domesticPost(faculty_code=fc, course_title=ct, course_code=cc, version_number=vn,
            total_points=tp, yearly_points=yp, start_year=sy, fee_per_point=fpp)
            db.session.add(d)
        db.session.commit()
        return

    def unitsData(excelFileName):
        location = "app/data/" + excelFileName

        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) #(0, 0) refers to the top left most cell

        data = []

        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))

        for i in range(len(data)):
            uc = data[i][0]
            ut = data[i][1]
            vn = data[i][2]
            up = data[i][3]
            ncd = data[i][8]
            #fee not provided in the excel file

            d = units(unit_code=uc, unit_title=ut, version_number=vn, credit_points=up, new_census_date=ncd, unit_fee=0)
            db.session.add(d)
        db.session.commit()
        return

    # Requires tweaking as international data provided does not indicate faculty code, only course owner
    def firstStep(studentType, facultyCode, startYear): 
        if studentType == internationalStudent:
            table  = international
        elif studentType == domesticPostStudent:
            table = domesticPost

    # This query returns all courses with the same faculty code
    # might require change depending what is required of this step
        query = table.query.get({"faculty_code": facultyCode}).all()
        #or
        query = table.query.filter_by(faculty_code = facultyCode).all()

        courseList = []

        for i in query:
            if i.course_title in courseList:
                continue
            else:
                courseList.append(i.course_title)

        return courseList

    
    #domestic post data retrieval
    def secondStep(studentType, selectedCourse, startYear):
        if studentType == internationalStudent:
            table  = international
        elif studentType == domesticPostStudent:
            table = domesticPost
        
        d = table.query.filter_by(course_title = selectedCourse, start_year = startYear).first()

        #might require some data structure changing and json type
        return d

    #unit selection for domestic students

