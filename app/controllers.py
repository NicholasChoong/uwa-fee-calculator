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

