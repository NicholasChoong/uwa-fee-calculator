import unittest, os, time
from app import app, db
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from selenium import webdriver

class SystemTest(unittest.TestCase):
    driver = None
    def setUp(self):
        self.driver = webdriver.Firefox()

        if not self.driver:
            self.skipTest('Web browser not available')
        else:
            db.init_app(app)
            db.create_all()

            inter = international(course_code="TS0001", version_number=1, unit_set_code="testsetcode", cricos="12345", course_title="Test Course",
            status="CURRENT", start_date="1/1/2021", expiry_date="12/12/2025", total_points=144, yearly_points=48, start_year=2021,
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
            self.driver.maximize_window()
            self.driver.get('http://localhost:5000/')

    def tearDown(self):
        if self.driver:
            self.driver.close()
            db.session.query(international).delete()
            db.session.query(domesticPost).delete()
            db.session.query(units).delete()
            db.session.query(cluster).delete()
            db.session.query(fieldOfEducation).delete()

            db.session.commit()
            db.session.remove()

    def test_calculator(self):
        self.driver.get('http://localhost:5000')
        self.driver.implicitly_wait(5)

        # Test international
        student_type = self.driver.find_element_by_id('feeCategory')
        student_type.send_keys('International Undergraduate')
        fee_year = self.driver.find_element_by_id('feeYear')
        fee_year.send_keys('Fees for 2021')
        
        next_step = self.driver.find_element_by_id('nxtBtn')
        next_step.click()
        '''
        or
        next_step = self.driver.find_element_by_partial_link_text('Next')
        self.assertEqual(next_step.get_attribute('innerHTML'), 'Select your course and starting year', msg = 'Step 1 complete')
        '''
        self.driver.implicitly_wait(5)


        select_course = self.driver.find_element_by_id('courseCode')
        select_course.send_keys('Bachelor of Commerce [BP002]')
        start_year = self.driver.find_element_by_id('year')
        start_year.send_keys('Starting 2021')
        
        next_step = self.driver.find_element_by_id('nxtBtn')
        next_step.click()
        '''
        or
        next_step = self.driver.find_element_by_partial_link_text('Next')
        self.assertEqual(next_step.get_attribute('innerHTML'), 'Summary:', msg = 'Step 2 complete and summary page reached')
        '''
        self.driver.implicitly_wait(5)

        # Going back to first step to test for another student type
        # by clicking previous twice (buttn id may be incorrect (nextBtn, prevBtn))
        
        previous_step = self.driver.find_element_by_id('prevBtn')
        previous_step.click()
        '''
        or
        previous = self.driver.find_element_by_partial_link_text('Previous')
        self.assertEqual(previous.get_attribute('innerHTML'), 'Select your course and starting year', msg = 'Back tracked to Step 2')
        '''
        self.driver.implicitly_wait(5)
        
        previous = self.driver.find_element_by_id('prevBtn')
        previous_step.click()
        '''
        or
        previous = self.driver.find_element_by_partial_link_text('Previous')
        self.assertEqual(previous.get_attribute('innerHTML'), 'Select your Fee Type from the list. Then select which year's fees to see.', msg = 'Back tracked to Step 1')
        '''
        self.driver.implicitly_wait(5)

        # Test domestic undergrad
        student_type = self.driver.find_element_by_id('feeCategory')
        student_type.send_keys('Domestic Undergraduate')
        fee_year = self.driver.find_element_by_id('feeYear')
        fee_year.send_keys('Fees for 2021')
        
        next_step = self.driver.find_element_by_id('nxtBtn')
        next_step.click()
        '''
        or
        self.driver.implicitly_wait(5)
        time.sleep(1)
        next_step = self.driver.find_element_by_partial_link_text('Next')
        self.assertEqual(next_step.get_attribute('innerHTML'), 'Select your course and starting year', msg = 'Step 1 complete')
        '''

        select_course = self.driver.find_element_by_id('courseCode')
        select_course.send_keys('Bachelor of Commerce [BP002]')
        start_year = self.driver.find_element_by_id('year')
        start_year.send_keys('Starting 2021')
        select_majors = self.driver.find_element_by_id('majorName')
        select_majors.send_keys('All majors [all]')
        
        next_step = self.driver.find_element_by_id('nxtBtn')
        next_step.click()
        '''
        or
        self.driver.implicitly_wait(5)
        time.sleep(1)
        next_step = self.driver.find_element_by_partial_link_text('Next')
        self.assertEqual(next_step.get_attribute('innerHTML'), 'If you take more/less than 48 credit points per year, your yearly fee may be different', msg = 'Units selection and summary page reached')
        '''
   
    if __name__ == '__main__':
        unittest.main()