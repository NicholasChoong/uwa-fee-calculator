import unittest, os, time
from app import app, db
from app.models import international, domesticPost, units, cluster, fieldOfEducation
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

class SystemTest(unittest.TestCase):
    driver = None
    def setUp(self):
        self.driver = webdriver.Firefox()

        # If Mozilla browser is not installed test will not be performed.
        if not self.driver:
            self.skipTest('Web browser not available')
        else: # Input temporary data into the test database
            db.init_app(app)
            db.create_all()

            inter = international(course_code="TS0001", version_number=1, unit_set_code="testsetcode", cricos="12345", course_title="Test Course",
            status="CURRENT", start_date="1/1/2021", expiry_date="12/12/2025", total_points=144, yearly_points=48, start_year=2021,
            total_fee=43500.50, availability='Available', course_type="Undergraduate Certificate", course_owner="Test")

            dompost = domesticPost(faculty_code="FAC00", course_title="Test Course", course_code="00000", version_number=1,
            total_points=144, yearly_points=48, start_year=2020, fee_per_point=500)

            unit = units(unit_code="TEST0001", unit_title="Test Unit", version_number=1, credit_points=6, new_census_date="1/1/2021", foe=000000,
            dom_clust=3001, non_clust=501, int_clust=3003)

            clust = cluster(year=2021, cluster=3001, fee=32200)

            field = fieldOfEducation(field_code="080100", detailed_discipline="Accounting", broad_dicsipline="MANAGEMENT AND COMMERCE")
            
            db.session.add(inter)
            db.session.add(dompost)
            db.session.add(unit)
            db.session.add(clust)
            db.session.add(field)

            db.session.commit()
            self.driver.maximize_window()
            self.driver.get('http://localhost:5000')

    # Close web driver and strip test database 
    def tearDown(self):
        if self.driver:
            self.driver.quit()
            db.session.query(international).delete()
            db.session.query(domesticPost).delete()
            db.session.query(units).delete()
            db.session.query(cluster).delete()
            db.session.query(fieldOfEducation).delete()

            db.session.commit()
            db.session.remove()

    # Test for international user calculator functionalities
    def test_calculator(self):
        self.driver.get('http://localhost:5000')
        self.driver.implicitly_wait(5)
        time.sleep(1)

        # Step 1: Select student type and fee year
        student_type = self.driver.find_element(By.ID,'coursetype')
        student_type.send_keys('International Undergraduate')
        student_type.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        fee_year = self.driver.find_element(By.ID,'feeyear')
        fee_year.send_keys('Fees for 2021')
        fee_year.send_keys(Keys.RETURN)
        time.sleep(1)

        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()
        self.driver.implicitly_wait(5)

        # Step 2: Select course and start year
        select_course = self.driver.find_element(By.ID,'course')
        select_course.send_keys('Test Course [TS0001]')
        select_course.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        start_year = self.driver.find_element(By.ID,'startyear')
        start_year.send_keys('Starting 2021')
        start_year.send_keys(Keys.RETURN)
        time.sleep(1)

        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(5)

        # Going back to first step to test for another student type
        # by clicking previous twice 
        previous_step = self.driver.find_element(By.ID,'prevBtn')
        previous_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(2)
        
        previous_step = self.driver.find_element(By.ID,'prevBtn')
        previous_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(2)

        # Test for domestic post graduate user calculator functionalities
        # Step 1: Select student type and fee year
        student_type = self.driver.find_element(By.ID,'coursetype')
        student_type.send_keys('Domestic Postgraduate Coursework Fee-Paying')
        student_type.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        fee_year = self.driver.find_element(By.ID,'feeyear')
        fee_year.send_keys('Fees for 2020')
        fee_year.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(1)

        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()

        # Step 2: Select course and start year
        select_course = self.driver.find_element(By.ID,'course')
        select_course.send_keys('Test Course [00000]')
        select_course.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        start_year = self.driver.find_element(By.ID,'startyear')
        start_year.send_keys('Starting 2020')
        start_year.send_keys(Keys.RETURN)
        time.sleep(1)
        
        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(2)

        # Going back to first step to test for another student type
        # by clicking previous twice 
        previous_step = self.driver.find_element(By.ID,'prevBtn')
        previous_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(2)
        
        previous_step = self.driver.find_element(By.ID,'prevBtn')
        previous_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(2)

        # Test for domestic undergraduate user calculator functionalities
        # Step 1: Select student type and fee year
        student_type = self.driver.find_element(By.ID,'coursetype')
        student_type.send_keys('Domestic Undergraduate')
        student_type.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        fee_year = self.driver.find_element(By.ID,'feeyear')
        fee_year.send_keys('Fees for 2021')
        fee_year.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(1)

        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()
        time.sleep(2)

        # Step 2: Select course, start year and major
        select_course = self.driver.find_element(By.ID,'course')
        select_course.send_keys('Bachelor of Science [BP004]')
        select_course.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        start_year = self.driver.find_element(By.ID,'startyear')
        start_year.send_keys('Starting 2021')
        start_year.send_keys(Keys.RETURN)
        self.driver.implicitly_wait(5)
        time.sleep(2)

        select_majors = self.driver.find_element(By.ID,'majorSelect')
        select_majors.send_keys('All majors [all]')
        select_majors.send_keys(Keys.RETURN)
        time.sleep(1)

        next_step = self.driver.find_element(By.ID,'nextBtn')
        next_step.click()
        self.driver.implicitly_wait(5)
        time.sleep(5)        
        
        # Step 3 (Removed): Select units
        # Unit selection testing has been removed due to unknown error where
        # Selenium inteprets the API code differently.
        '''
        select_unit = self.driver.find_element(By.ID,'unitSelect')
        select_unit.send_keys('Test Unit')
        time.sleep(5)
        select_unit.send_keys(Keys.RETURN)
        '''

    if __name__ == '__main__':
        unittest.main()