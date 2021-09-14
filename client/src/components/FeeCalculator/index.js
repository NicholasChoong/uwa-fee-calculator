import React, { useState } from 'react'
import FeeCategoryAndYear from './FeeCategoryAndYear'
import FeeCourseAndYear from './FeeCourseAndYear'

const PAGES = {
  STUDENT_AND_YEAR: 1,
  COURSE_AND_YEAR: 2,
  //   MAJOR: 3,
  SUMMARY: 3
}

const FeeCalculator = () => {
  const [page, setPage] = useState(PAGES.STUDENT_AND_YEAR)
  const [data, setData] = useState({
    feeCategory: '',
    feeYear: '',
    courseCode: '',
    year: ''
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
  //   const [major, setMajor] = useState([])

  const pageDisplay = () => {
    switch (page) {
      case PAGES.STUDENT_AND_YEAR:
        return (
          <FeeCategoryAndYear
            updateData={updateData}
            updateCourseListAndYearList={updateCourseListAndYearList}
            nextPage={nextPage}
          />
        )
      case PAGES.COURSE_AND_YEAR:
        return (
          <FeeCourseAndYear
            // getData={getData}
            data={data}
            updateData={updateData}
            courseList={courseList}
            startYearList={startYearList}
            updateFee={updateFee}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )
      //   case PAGES.MAJOR:
      //     return <></>
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
            <button type='button' onClick={prevPage}>
              Previous
            </button>
          </>
        )
      default:
        return <p>ERROR!!!</p>
    }
  }

  const prevPage = () => {
    setPage(prev => prev - 1)
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
  }

  const updateCourseListAndYearList = response => {
    setCourseList(response.courseList)
    setStartYearList(response.startYearList)
  }

  const updateFee = response => {
    setFee(response.fee)
  }

  const updateData = response => {
    setData(response.data)
  }

  //   const getData = () => data

  return (
    <div>
      <p>Step {page}</p>
      {pageDisplay()}
    </div>
  )
}

export default FeeCalculator
