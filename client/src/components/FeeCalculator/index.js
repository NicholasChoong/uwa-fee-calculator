import React, { useState } from 'react'
import PAGES from '../../libs/pageEnum'
import FeeCategoryAndYear from './FeeCategoryAndYear'
import FeeCourseAndYear from './FeeCourseAndYear'
import FeeMajor from './FeeMajor'
import Summary_D from '../Summary_D'
import Summary_FP from '../Summary_FP'
import Summary_NFP from '../Summary_NFP'
import Summary_SA from '../Summary_SA'

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
            updatePage={updatePage}
            majorList={majorList}
            updateUnitList={updateUnitList}
          />
        )
      case PAGES.UNIT:
        return <></>
      case PAGES.D_SUMMARY:
        return (
          <Summary_D
            estimatedFee={estimatedFee}
            totalFee={totalFee}
            prevPage={prevPage}
            updatePage={updatePage}
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
        return <Summary_FP fee={fee} updatePage={updatePage} />
      case PAGES.STUDY_ABOARD_SUMMARY:
        return <Summary_SA fee={fee} updatePage={updatePage} />
      case PAGES.DHDR:
        return <Summary_NFP updatePage={updatePage} />
      default:
        return <p>ERROR!!!</p>
    }
  }

  return (
    <div className='SelectInfoContainer' id='regForm'>
      {/* <p>Debug: Step {page}</p> */}
      {pageDisplay()}
    </div>
  )
}

export default FeeCalculator
