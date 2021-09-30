from app import db

# Database of student type
# class students(db.Model):
#   id = db.Column(db.Integer, primary_key = True, nullable = False)
#    student_type = db.Column(db.String(255)) #Either domestic or international

# Courses
class international(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    course_code = db.Column(db.String(255))
    version_number = db.Column(db.Integer)
    unit_set_code = db.Column(db.String(255))
    cricos = db.Column(db.String(255))
    course_title = db.Column(db.String(255))
    status = db.Column(db.String(255))
    start_date = db.Column(db.String(255))
    expiry_date = db.Column(db.String(255))
    total_points = db.Column(db.Integer)
    yearly_points = db.Column(db.Integer)
    start_year = db.Column(db.Integer)
    total_fee = db.Column(db.Float)
    availability = db.Column(db.String(255))
    course_type = db.Column(db.String(255))
    course_owner = db.Column(db.String(255))

# Domestic post grad
class domesticPost(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    faculty_code = db.Column(db.String(255))
    course_title = db.Column(db.String(255))
    course_code = db.Column(db.String(255))
    version_number = db.Column(db.Integer)
    total_points = db.Column(db.Integer)
    yearly_points = db.Column(db.Integer)
    start_year = db.Column(db.Integer)
    fee_per_point = db.Column(db.Integer)

# Units
class units(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    unit_code = db.Column(db.String(255))
    unit_title = db.Column(db.String(255))
    version_number =db.Column(db.Integer)
    credit_points = db.Column(db.Integer)
    new_census_date = db.Column(db.String(255))
    unit_fee = db.Column(db.Float)

# Cluster fees
class cluster(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    year = db.Column(db.String(255))
    cluster = db.Column(db.Integer)
    fee = db.Column(db.Integer)
