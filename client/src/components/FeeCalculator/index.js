import React, { useState } from 'react'
import PAGES from '../../libs/pageEnum'
import FeeCategoryAndYear from './FeeCategoryAndYear'
import FeeCourseAndYear from './FeeCourseAndYear'
import FeeMajor from './FeeMajor'
import FeeUnit from './FeeUnit'

const FeeCalculator = () => {
  const [page, setPage] = useState(PAGES.STUDENT_AND_YEAR)
  const [data, setData] = useState({
    feeCategory: '',
    feeYear: '',
    courseCode: '',
    year: '',
    majorCode: ''
  })
  const [courseList, setCourseList] = useState([])
  const [startYearList, setStartYearList] = useState([])
  const [fee, setFee] = useState({
    annual_credit_point: '',
    course_credit_point: '',
    course_name: '',
    fee: '',
    fee_per_credit_point: '',
    total_fee: ''
  })
  const [majorList, setMajorList] = useState([])
  const [unitList, setUnitList] = useState([])

  const prevPage = () => {
    setPage(prev => prev - 1)
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
  }

  const updatePage = newPage => {
    setPage(newPage)
  }

  const updateCourseListAndYearList = (newCourseList, newStartYearList) => {
    setCourseList(newCourseList)
    setStartYearList(newStartYearList)
  }

  const updateFee = newFee => {
    setFee(newFee)
  }

  const updateData = newData => {
    setData(newData)
  }

  const updateMajorList = newMajorList => {
    setMajorList(newMajorList)
  }

  const updateUnitList = newUnitList => {
    setUnitList(newUnitList)
  }

  const pageDisplay = () => {
    switch (page) {
      case PAGES.STUDENT_AND_YEAR:
        return (
          <FeeCategoryAndYear
            updateData={updateData}
            updateCourseListAndYearList={updateCourseListAndYearList}
            nextPage={nextPage}
            updatePage={updatePage}
          />
        )
      case PAGES.COURSE_AND_YEAR:
        return (
          <FeeCourseAndYear
            data={data}
            updateData={updateData}
            courseList={courseList}
            startYearList={startYearList}
            updateFee={updateFee}
            prevPage={prevPage}
            nextPage={nextPage}
            updatePage={updatePage}
            updateMajorList={updateMajorList}
          />
        )
      case PAGES.MAJOR:
        return (
          <FeeMajor
            data={data}
            updateData={updateData}
            prevPage={prevPage}
            nextPage={nextPage}
            majorList={majorList}
            updateUnitList={updateUnitList}
          />
        )
      case PAGES.UNIT:
        return (
          <FeeUnit
            data={data}
            prevPage={prevPage}
            nextPage={nextPage}
            unitList={unitList}
          />
        )
      case PAGES.SUMMARY:
        return (
          <>
            <p>
              Course Name - <b>{fee.course_name}</b>
            </p>
            <p>
              Annual Credit Point - <b>{fee.annual_credit_point}</b>
            </p>
            <p>
              Total Credit Point - <b>{fee.course_credit_point}</b>
            </p>
            <p>
              Fee per Credit Point - <b>{fee.fee_per_credit_point}</b>
            </p>
            <p>
              Fee - <b>{fee.fee}</b>
            </p>
            <p>
              Total Fee - <b>{fee.total_fee}</b>
            </p>
            <button
              className='btn btn-primary'
              type='button'
              onClick={() =>
                data.feeCategory[0] === 'D'
                  ? prevPage()
                  : updatePage(PAGES.COURSE_AND_YEAR)
              }
            >
              Previous
            </button>
          </>
        )
      case PAGES.DHDR:
        return (
          <>
            <p>
              <span>
                You pay no tuition fee under the{' '}
                <a href='https://study.uwa.edu.au/fees-and-scholarships/research-training-program'>
                  Research Training Program
                </a>
              </span>
            </p>
            <button
              className='btn btn-primary'
              type='button'
              onClick={() => updatePage(PAGES.STUDENT_AND_YEAR)}
            >
              Previous
            </button>
          </>
        )
      default:
        return <p>ERROR!!!</p>
    }
  }

  return (
    <div className='fee-calculator'>
      <p>Step {page}</p>
      {pageDisplay()}
    </div>
  )
}

export default FeeCalculator
