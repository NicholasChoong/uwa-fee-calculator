import React, { useState, lazy, Suspense } from 'react'
import PAGES from '../../libs/pageEnum'
import FeeCategoryAndYear from './FeeCategoryAndYear'
import Steps from '../Steps'

// import FeeCourseAndYear from './FeeCourseAndYear'
// import Summary_D from '../Summary_D'
// import Summary_FP from '../Summary_FP'
// import Summary_NFP from '../Summary_NFP'
// import Summary_SA from '../Summary_SA'
const FeeCourseAndYear = lazy(() => import('./FeeCourseAndYear'))
const Summary_D = lazy(() => import('../Summary_D'))
const Summary_FP = lazy(() => import('../Summary_FP'))
const Summary_NFP = lazy(() => import('../Summary_NFP'))
const Summary_SA = lazy(() => import('../Summary_SA'))

const FeeCalculator = () => {
  const [page, setPage] = useState(PAGES.STUDENT_AND_YEAR)
  const [data, setData] = useState({
    feeCategory: '',
    feeCategoryName: '',
    feeYear: '',
    courseCode: '',
    year: '',
    majorName: ''
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

  const prevPage = () => {
    setPage(prev => prev - 1)
  }

  const updatePage = newPage => {
    setPage(newPage)
  }

  const updateCourseList = newCourseList => {
    setCourseList(newCourseList)
  }

  const updateStartYearList = newStartYearList => {
    setStartYearList(newStartYearList)
  }

  const updateFee = newFee => {
    setFee(newFee)
  }

  const updateData = newData => {
    setData(newData)
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
            updateCourseList={updateCourseList}
            updateStartYearList={updateStartYearList}
            updatePage={updatePage}
            page={page}
          />
        )
      case PAGES.COURSE_AND_YEAR:
        return (
          <FeeCourseAndYear
            data={data}
            updateData={updateData}
            courseList={courseList}
            startYearList={startYearList}
            updateStartYearList={updateStartYearList}
            updateFee={updateFee}
            prevPage={prevPage}
            updatePage={updatePage}
            page={page}
            updateUnitList={updateUnitList}
            updateEstimatedFee={updateEstimatedFee}
          />
        )
      case PAGES.D_SUMMARY:
        return (
          <Summary_D
            estimatedFee={estimatedFee}
            totalFee={totalFee}
            prevPage={prevPage}
            updatePage={updatePage}
            page={page}
            data={data}
            unitList={unitList}
            selectedUnitList={selectedUnitList}
            addSelectedUnit={addSelectedUnit}
            removeSelectedUnit={removeSelectedUnit}
            clearSelectedUnit={clearSelectedUnit}
            updateTotalFee={updateTotalFee}
          />
        )
      case PAGES.FEE_PAYING_SUMMARY:
        return (
          <Summary_FP
            data={data}
            fee={fee}
            updatePage={updatePage}
            page={page}
          />
        )
      case PAGES.STUDY_ABOARD_SUMMARY:
        return (
          <Summary_SA
            data={data}
            fee={fee}
            updatePage={updatePage}
            page={page}
          />
        )
      case PAGES.DHDR:
        return <Summary_NFP updatePage={updatePage} page={page} />
      default:
        return <p>ERROR!!!</p>
    }
  }

  return (
    <main>
      <div className='SelectInfoContainer' id='regForm'>
        <Suspense
          fallback={
            <div style={{ textAlign: 'center' }}>
              <br />
              <br />
              <br />
              <br />
              <hr style={{ width: '50%', margin: 'auto' }} />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          }
        >
          {pageDisplay()}
        </Suspense>
        <Steps page={page} />
      </div>
    </main>
  )
}

export default FeeCalculator
