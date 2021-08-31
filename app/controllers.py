from app import app, db
from app.models import international, domesticPost
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
            for j in range(3):
                if data[i][14+2*j] != None:
                    if j == 0:
                        sy = "2019"
                        av = data[i][21]
                    elif j == 1:
                        sy = "2020"
                        av = data[i][22]
                    else:
                        sy = "2021"
                        av = data[i][23]   
                    d = international(code=cd, version_number=vn, unit_set_code= usc, cricos=cr, course_title=ti,
                    status = su, start_date=st, expiry_date =ex, total_points=tp, yearly_points=yp, start_year=sy,
                    availability=av, course_type=ct, course_owner=co)
                    db.session.add(d)
        db.session.commit()

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

