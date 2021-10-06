import unittest, os
from app import app, db
from app.models import international, domesticPost, units, cluster

#use 'python3 -m unittest tests/unittest.py -v' command for testing on the uwa-fee-calculator directory 


class ModelCase(unittest.TestCase):
    def setUp(self):
        basedir = os.path.abspath(os.path.dirname(__file__))
        app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///' + os.path.join(basedir, 'test.db')
        self.app = app.test_client()
        db.create_all()

        i = international(course_code="TS0001", version_number=1, unit_set_code="testsetcode", cricos="12345", course_title="Test Course",
            status="CURRENT", start_date="1/1/2021", expiry_date="12/12/2021", total_points=144, yearly_points=48, start_year=2021,
            total_fee=43500.50, availability='Available', course_type="Undergraduate Certificate", course_owner="Test")

        dp = domesticPost(faculty_code="FAC00", course_title="Test Course", course_code="00000", version_number=1,
            total_points=144, yearly_points=48, start_year=2021, fee_per_point=500)

        u = units(unit_code="TEST0001", unit_title="Test Unit", version_number=1, credit_points=6, new_census_date="12/12/2021", foe=000000,
            dom_clust=2, non_clust=501, int_clust=3003)

        c = cluster(year=2021, cluster=3001, fee=32200)

        db.session.add(i)
        db.session.add(dp)
        db.session.add(u)
        db.session.add(c)

        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()
    
    def test_international_data_exist(self):
        x = international.query.filter_by(course_code= "TS0001").first()
        self.assertTrue(x.course_title == "Test Course")
        x = international.query.filter_by(course_code= "Foo").first()
        self.assertTrue(x == None)

    def test_domesticpost_data_exist(self):
        x = domesticPost.query.filter_by(faculty_code= "FAC00").first()
        self.assertTrue(x.course_title == "Test Course")
        x = domesticPost.query.filter_by(faculty_code= "Foo").first()
        self.assertTrue(x == None)

    def test_units_data_exist(self):
        x = units.query.filter_by(unit_code= "TEST0001").first()
        self.assertTrue(x.unit_title == "Test Unit")
        x = units.query.filter_by(unit_code= "Foo").first()
        self.assertTrue(x == None)

    def test_cluster_data_exist(self):
        x = cluster.query.filter_by(cluster= 3001).first()
        self.assertTrue(x.year == "2021")
        x = cluster.query.filter_by(cluster= 0).first()
        self.assertTrue(x == None)
        
    if __name__ == '__main__':
        unittest.main()