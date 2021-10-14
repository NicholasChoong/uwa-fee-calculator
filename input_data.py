'''
Purpose of this script is to input data from xls (excel) files into the database.
Refer to the installation guide for instructions regarding creating and updating the database.
Database models can be found in the models.py file in the app directory.
'''

from app import app, db
from app.models import international, domesticPost, units, cluster, fieldOfEducation
import xlrd, re


class Parsers:
    # Function to input course data into the international table; usage: interntional undergraduate and post graduate students
    def internationalData(excelFileName):
        location = "app/data/" + excelFileName
        
        # Open the specified xls file
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) 

        data = []

        # Append all data from xls to a list
        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))
        
        # Iterate through the list data[0][5] refers to the data found in the first row at the sixth column
        # Initialise variables with relevant data
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

            # Checks if the course is available from availability and fee columns
            if data[i][5] == 'CURRENT':
                for j in range(3):
                    if data[i][21+j] == "Available":
                        sy = 2019+j
                        fee = sheet.cell(i+1, 14+2*j)
                        if fee.ctype == xlrd.XL_CELL_EMPTY:
                            continue
                        else:
                            fee = data[i][14+2*j]
                        av = data[i][21+j]
                        d = international(course_code=cd, version_number=vn, unit_set_code= usc, cricos=cr, course_title=ti,
                        status = su, start_date=st, expiry_date =ex, total_points=tp, yearly_points=yp, start_year=sy,
                        total_fee=fee, availability=av, course_type=ct, course_owner=co)
                        db.session.add(d)
        db.session.commit()
        return

    # Function to input course data into the domesticPost table; usage: domestic postgraduate students
    def domesticPostData(excelFileName):
        location = "app/data/" + excelFileName

        # Open the specified xls file
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) 
        data = []

        # Append all relevant data from xls to a list (starts at third row to skip headers)
        for i in range(2, sheet.nrows):
            data.append(sheet.row_values(i))

        # Iterate and add all course information into database
        # Unlike international, this function does not have conditionals because the file was a cleaned/sorted file
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

    # Function to input unit data into the units table; usage: domestic undergraduate students
    def unitsData(excelFileName):
        location = "app/data/" + excelFileName

        # Open the specified xls file
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0) 

        data = []

        # Append all relevant data from xls to a list (starts at second row to skip headers)
        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))

        # Iterate list and add all unit information into database
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
    
    # Function to input cluster data into the domesticPost table; usage: fees for units
    def clusterData(excelFileName):
        location = "app/data/" + excelFileName

        # Open the specified xls file
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(0)
        sheet.cell_value(0, 0)
        
        data = [] 

        # Append all relevant data from xls to a list (starts at second row to skip headers)
        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))

        # Iterate list and add all clusters into database
        for i in range(len(data)):
            yr = data[i][0]
            cl = data[i][1]
            fe = data[i][2]

            d = cluster(year=yr, cluster=cl, fee=fe)
            db.session.add(d)
        db.session.commit()
        return

    # Function to input field of education data into the fieldOfEducation table; usage: categorising units
    def foeData(excelFileName):
        location = "app/data/" + excelFileName

        # Open the specified xls file and view the second sheet of the file
        wb = xlrd.open_workbook(location)
        sheet = wb.sheet_by_index(1)
        sheet.cell_value(0, 0)
        
        data = [] 

        # Append all relevant data from xls to a list (starts at second row to skip headers)
        for i in range(1, sheet.nrows):
            data.append(sheet.row_values(i))

        # Iterate list nd add all foe data into database
        for i in range(len(data)):
            code = data[i][1]
            detailed = data[i][9]
            broad = data[i][12]

            d = fieldOfEducation(field_code=code, detailed_discipline=detailed, broad_dicsipline=broad)
            db.session.add(d)
        db.session.commit()
        return

'''
Change the name of the files within the brackets if required.
If xlsx file is not supported error occurs, use the following command:
    'libreoffice --convert-to xls filename.xlsx' to convert it to xls
'''
print("Data parsing to database...")

Parsers.internationalData("international.xls")
Parsers.domesticPostData("domesticpost.xls")
Parsers.unitsData("units.xls")
Parsers.clusterData("cluster_fees.xls")
Parsers.foeData("2022_allocation_of_units_of_study.xls")

print("Data successfully parsed.")