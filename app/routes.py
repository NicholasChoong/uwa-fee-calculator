from flask import render_template, request, redirect, session, Flask, flash, url_for, jsonify
from app import app, db
from app.models import students, courses, units
from app.controllers import UserControl
from werkzeug.urls import url_parse

# Route for the homepage
@app.route("/")
def start():
    return render_template("empty.html")
