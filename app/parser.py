#This is a prototype file for testing xlrd functions to parse data into an array

from app import app, db
from app.models import international, domesticPost
import xlrd

location = "data/domesticpost.xls"

wb = xlrd.open_workbook(location)
sheet = wb.sheet_by_index(0)
sheet.cell_value(0, 0) #(0, 0) refers to the top left most cell


#sheet.ncols for columns and sheet.nrows for rows

data = []

for i in range(2, sheet.nrows):
   data.append(sheet.row_values(i))

print(data[2])

for i in range(1,9):
    print(data[2][i])

print (len(data))

#Note: version_number, total_pts, points_per_eftsl, year_of_comm, fee_per_point_2021
#are read as double and has 1 decimal point


