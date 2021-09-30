from flask import render_template
from app import app
from app.controllers import UserControl

# Route for the homepage
@app.route("/")
def start():
    UserControl.domesticPostData("domesticpost.xls")
    UserControl.internationalData("international.xls")
    UserControl.unitsData("units.xls")
    UserControl.clusterData("cluster_fees.xls")
    return render_template("empty.html")

