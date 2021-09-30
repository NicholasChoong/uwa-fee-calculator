from app import app, db
from app.models import international, domesticPost, units, cluster
from flask import render_template, request, jsonify
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
            if data[i][5] == 'CURRENT':
                for j in range(3):
                    if data[i][21+j] == "Available":
                        sy = 2019+j
                        fee = sheet.cell(i+1, 14+2*j)
                        if fee.ctype == xlrd.XL_CELL_EMPTY:
                            fee = -1
                        else:
                            fee = data[i][14+2*j]
                        av = data[i][21+j]
                        d = international(course_code=cd, version_number=vn, unit_set_code= usc, cricos=cr, course_title=ti,
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
            fo = data[i][4]
            dc = data[i][5]
            nc = data[i][6]
            ic = data[i][7]
            ncd = data[i][8]

            d = units(unit_code=uc, unit_title=ut, version_number=vn, credit_points=up, new_census_date=ncd, foe=fo,
                      dom_clust=dc, non_clust=nc, int_clust=ic)
            db.session.add(d)
        db.session.commit()
        return
    
    def clusterData(excelFileName):
        location = "app/data/" + excelFileName

        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0)
        
        data = [] 

        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))

        for i in range(len(data)):
            yr = data[i][0]
            cl = data[i][1]
            fe = data[i][2]

            d = cluster(year=yr, cluster=cl, fee=fe)
            db.session.add(d)
        db.session.commit()
        return