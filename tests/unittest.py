import unittest, os
from app import app, db
from app.models import international, domesticPost, units, cluster, fieldOfEducation

# use 'python3 -m unittest tests/unittest.py -v' command in a virtual environment for testing on the uwa-fee-calculator directory 

class ModelCase(unittest.TestCase):
    # Creates the testing database and input each required fields manually
    def setUp(self):
        basedir = os.path.abspath(os.path.dirname(__file__))
        app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///' + os.path.join(basedir, 'test.db')
        self.app = app.test_client()
        db.create_all()

        inter = international(course_code="TS0001", version_number=1, unit_set_code="testsetcode", cricos="12345", course_title="Test Course",
            status="CURRENT", start_date="1/1/2021", expiry_date="12/12/2021", total_points=144, yearly_points=48, start_year=2021,
            total_fee=43500.50, availability='Available', course_type="Undergraduate Certificate", course_owner="Test")

        dompost = domesticPost(faculty_code="FAC00", course_title="Test Course", course_code="00000", version_number=1,
            total_points=144, yearly_points=48, start_year=2021, fee_per_point=500)

        unit = units(unit_code="TEST0001", unit_title="Test Unit", version_number=1, credit_points=6, new_census_date="12/12/2021", foe=000000,
            dom_clust=2, non_clust=501, int_clust=3003)

        clust = cluster(year=2021, cluster=3001, fee=32200)

        field = fieldOfEducation(field_code="080100", detailed_discipline="Accounting", broad_dicsipline="MANAGEMENT AND COMMERCE")

        db.session.add(inter)
        db.session.add(dompost)
        db.session.add(unit)
        db.session.add(clust)
        db.session.add(field)

        db.session.commit()

    # End the testing session and strip the testing database
    def tearDown(self):
        db.session.remove()
        db.drop_all()
    
    def test_international_data_exist(self):
        # Checks for previous input and its relevant data
        x = international.query.filter_by(course_code= "TS0001").first()
        self.assertFalse(x.course_title == "WRONG OUTPUT")
        self.assertTrue(x.course_title == "Test Course")

        # Checks for non-existent data
        x = international.query.filter_by(course_code= "Foo").first()
        self.assertFalse(x != None)
        self.assertTrue(x == None)

    def test_domesticpost_data_exist(self):
        x = domesticPost.query.filter_by(faculty_code= "FAC00").first()
        self.assertFalse(x.course_title == "WRONG OUTPUT")
        self.assertTrue(x.course_title == "Test Course")

        x = domesticPost.query.filter_by(faculty_code= "Foo").first()
        self.assertFalse(x != None)
        self.assertTrue(x == None)

    def test_units_data_exist(self):
        x = units.query.filter_by(unit_code= "TEST0001").first()
        self.assertFalse(x.unit_title == "WRONG OUTPUT")
        self.assertTrue(x.unit_title == "Test Unit")

        x = units.query.filter_by(unit_code= "Foo").first()
        self.assertFalse(x != None)
        self.assertTrue(x == None)

    def test_cluster_data_exist(self):
        x = cluster.query.filter_by(cluster= 3001).first()
        self.assertFalse(x.year == "WRONG OUTPUT")
        self.assertTrue(x.year == "2021")

        x = cluster.query.filter_by(cluster= 0).first()
        self.assertFalse(x != None)
        self.assertTrue(x == None)

    def test_fieldofeducation_data_exist(self):
        x = fieldOfEducation.query.filter_by(field_code= "080100").first()
        self.assertFalse(x.broad_dicsipline == "WRONG OUTPUT")
        self.assertTrue(x.broad_dicsipline == "MANAGEMENT AND COMMERCE")

        x = units.query.filter_by(unit_code= "Foo").first()
        self.assertFalse(x != None)
        self.assertTrue(x == None)
        
    if __name__ == '__main__':
        unittest.main()