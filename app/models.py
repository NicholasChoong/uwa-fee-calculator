from app import db

# Database of student type
class students(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    student_type = db.Column(db.String(255)) #Either domestic or international

# Courses
class courses(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    course_student = db.Column(db.String(255), db.ForeignKey('students.student_type'), nullable = False)
    title = db.Column(db.String(255))
    status = db.Column(db.String(255))
    started = db.Column(db.String(255))
    expiry = db.Column(db.String(255))
    total_cp = db.Column(db.Integer)
    yearly_cp = db.Column(db.Integer)


# Database of units
class units(db.Model):
    id = db.Column(db.Integer, primary_key = True, nullable = False)


    