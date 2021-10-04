import React, { useState, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'
import FeeCategoryAndYear from './FeeCategoryAndYear'
import FeeCourseAndYear from './FeeCourseAndYear'
import FeeMajor from './FeeMajor'
import FeeUnit from './FeeUnit'
// import Summary_D from '../Summary_D'

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
  const [selectedUnitList, setSelectedUnitList] = useState([])
  const [estimatedFee, setEstimatedFee] = useState({
    course_name: '',
    course_credit_point: '',
    creditpoint: '',
    fee_median: '',
    fee_range: ''
  })
  const [totalFee, setTotalFee] = useState(0)
  const componentRef = useRef()
  //   const handlePrint = useReactToPrint({ content: () => componentRef.current })

  const prevPage = () => {
    setPage(prev => prev - 1)
  }

  const nextPage = () => {
    setPage(prev => prev + 1)
    // console.log(page)
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

  const addSelectedUnit = selectedUnit => {
    const newSelectedUnitList = [...selectedUnitList, selectedUnit]
    setSelectedUnitList(newSelectedUnitList)
  }

  const removeSelectedUnit = unitCode => {
    const fileteredList = [...selectedUnitList].filter(
      selectedUnit => selectedUnit.code !== unitCode
    )
    setSelectedUnitList(fileteredList)
  }

  const clearSelectedUnit = () => {
    setSelectedUnitList([])
  }

  const updateEstimatedFee = newEstimatedFee => {
    setEstimatedFee(newEstimatedFee)
  }

  const updateTotalFee = newTotalFee => {
    setTotalFee(newTotalFee)
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
            updateUnitList={updateUnitList}
            updateEstimatedFee={updateEstimatedFee}
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
            updatePage={updatePage}
            unitList={unitList}
            selectedUnitList={selectedUnitList}
            addSelectedUnit={addSelectedUnit}
            removeSelectedUnit={removeSelectedUnit}
            clearSelectedUnit={clearSelectedUnit}
            updateTotalFee={updateTotalFee}
          />
        )
      case PAGES.D_SUMMARY:
        return (
          <div style={{ textAlign: 'center' }}>
            <ReactToPrint
              trigger={PrintButton}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              {/* <Summary_D
              estimatedFee={estimatedFee}
              totalFee={totalFee}
              ref={componentRef}
            /> */}
              <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
              <br />
              <br />
              <p>
                Course Name - <b>{estimatedFee.course_name}</b>
              </p>
              <p>
                Course Credit Point - <b>{estimatedFee.course_credit_point}</b>
              </p>
              <p>
                Credit Point - <b>{estimatedFee.creditpoint}</b>
              </p>
              <p>
                **Average Annual Fee - <b>{estimatedFee.fee_median}</b>
              </p>
              <p>
                Typical Fee Range - <b>{estimatedFee.fee_range}</b>
              </p>
              <p>
                Total Calculated Fee - <b>${totalFee}</b>
              </p>
              <br />
              <br />
            </div>
            <div style={{ overflow: 'auto' }}>
              <div style={{ textAlign: 'center' }}>
                <button id='prevBtn' type='button' onClick={() => prevPage()}>
                  Previous
                </button>
              </div>
            </div>
          </div>
        )
      case PAGES.FEE_PAYING_SUMMARY:
        return (
          <div style={{ textAlign: 'center' }}>
            <ReactToPrint
              trigger={PrintButton}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
              <br />
              <br />
              <p>
                Course Name - <b>{fee.course_name}</b>
              </p>
              <p>
                Annual Credit Point - <b>{fee.annual_credit_point}</b>
              </p>
              <p>
                Course Credit Point - <b>{fee.course_credit_point}</b>
              </p>
              <p>
                Fee per Credit Point - <b>{fee.fee_per_credit_point}</b>
              </p>
              <p>
                Fee per EFTSL - <b>{fee.fee}</b>
              </p>
              <p>
                Total Course Fee - <b>{fee.total_fee}</b>
              </p>
              <br />
              <br />
            </div>
            <div style={{ overflow: 'auto' }}>
              <div style={{ textAlign: 'center' }}>
                <button
                  id='prevBtn'
                  type='button'
                  onClick={() => updatePage(PAGES.COURSE_AND_YEAR)}
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        )
      case PAGES.STUDY_ABOARD_SUMMARY:
        return (
          <div style={{ textAlign: 'center' }}>
            <ReactToPrint
              trigger={PrintButton}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
              <br />
              <br />
              <p>
                Course Name - <b>{fee.course_name}</b>
              </p>
              <p>
                Total Course Fee - <b>{fee.total_fee}</b>
              </p>
              <br />
              <br />
            </div>
            <div style={{ overflow: 'auto' }}>
              <div style={{ textAlign: 'center' }}>
                <button
                  id='prevBtn'
                  type='button'
                  onClick={() => updatePage(PAGES.COURSE_AND_YEAR)}
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        )
      case PAGES.DHDR:
        return (
          <div style={{ textAlign: 'center' }}>
            <ReactToPrint
              trigger={PrintButton}
              content={() => componentRef.current}
            />
            <div ref={componentRef}>
              <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
              <br />
              <br />
              <p>
                <span>
                  You pay no tuition fee under the{' '}
                  <a href='https://study.uwa.edu.au/fees-and-scholarships/research-training-program'>
                    Research Training Program
                  </a>
                </span>
              </p>
              <br />
              <br />
            </div>
            <div style={{ overflow: 'auto' }}>
              <div style={{ textAlign: 'center' }}>
                <button
                  id='prevBtn'
                  type='button'
                  onClick={() => updatePage(PAGES.STUDENT_AND_YEAR)}
                >
                  Previous
                </button>
              </div>
            </div>
          </div>
        )
      default:
        return <p>ERROR!!!</p>
    }
  }

  return (
    <div className='SelectInfoContainer' id='regForm'>
      <p>Debug: Step {page}</p>
      {pageDisplay()}
    </div>
  )
}

export default FeeCalculator
