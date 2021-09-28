from flask import render_template
from app import app
from app.controllers import UserControl

# Route for the homepage
@app.route("/")
def home():
    # UserControl.domesticPostData("domesticpost.xls")
    # UserControl.internationalData("international.xls")
    # UserControl.unitsData("units.xls")
    return app.send_static_file("index.html")
