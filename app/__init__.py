from flask import Flask, render_template, request, redirect
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__, static_folder="../client/build", static_url_path="/")
#app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
app.config["JSON_SORT_KEYS"] = False


from app import routes, models
