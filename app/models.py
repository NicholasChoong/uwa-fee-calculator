# All tables created for the database for declared here.

from app import db

# This table stores course details for international undergraduate and postgraduate students
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

# This table stores course details for domestic postgraduate students
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

# This table stores unit details, current usage for domestic undergradute students.
# More field required to include commonwealth supported domestic students
class units(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    unit_code = db.Column(db.String(255))
    unit_title = db.Column(db.String(255))
    version_number =db.Column(db.Integer)
    credit_points = db.Column(db.Integer)
    new_census_date = db.Column(db.String(255))
    dom_clust = db.Column(db.Integer)
    non_clust = db.Column(db.Integer)
    int_clust = db.Column(db.Integer)
    foe = db.Column(db.Integer)

# This table stores cluster fee details to price units
class cluster(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    year = db.Column(db.String(255))
    cluster = db.Column(db.Integer)
    fee = db.Column(db.Integer)

# This table stores field of education details, current usage to cetegorise units
class fieldOfEducation(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    field_code = db.Column(db.String(255))
    detailed_discipline = db.Column(db.String(255))
    broad_dicsipline = db.Column(db.String(255))
