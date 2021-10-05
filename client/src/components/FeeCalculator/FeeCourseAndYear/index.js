import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'
import PAGES from '../../../libs/pageEnum'

const FeeCourseAndYear = props => {
  const {
    data,
    updateData,
    courseList,
    startYearList,
    updateFee,
    prevPage,
    nextPage,
    updatePage,
    updateMajorList,
    updateUnitList,
    updateEstimatedFee
  } = props
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    ...data,
    courseCode: '',
    year: startYearList?.[0]?.label
  })
  const [courseName, setCourseName] = useState('')

  const loadUnits = useCallback(async () => {
    const unitsData = await request.post('/Calculator/GetUnitsForMajor', {
      majorCode: 'all',
      feeYear: selection.feeYear
    })
    if (error) console.error(error)
    if (response.ok) {
      const newUnitList = Object.entries(unitsData[0]).map(
        ([unitCode, unitName]) => ({
          value: unitCode,
          label: unitName
        })
      )
      updateUnitList(newUnitList)
      if (selection.feeCategory === 'DUG') {
        nextPage()
      } else {
        console.log('Navigating to unit page')
        updatePage(PAGES.UNIT)
      }
    }
  }, [
    request,
    response,
    error,
    selection,
    updateUnitList,
    nextPage,
    updatePage
  ])

  const loadMajorFee = useCallback(async () => {
    const majorFeeData = await request.post('/Calculator/GetFeeForMajor', {
      ...selection,
      majorCode: 'all'
    })
    if (error) console.error(error)
    if (response.ok) {
      const newMajorFee = {
        ...majorFeeData[0],
        course_name: courseName
      }
      updateEstimatedFee(newMajorFee)
      loadUnits()
    }
  }, [
    request,
    response,
    error,
    selection,
    courseName,
    updateEstimatedFee,
    loadUnits
  ])

  const loadMajor = useCallback(async () => {
    const majorData = await request.post('/Calculator/GetMajorsForCourse', {
      course: selection.courseCode
    })
    if (error) console.error(error)
    if (response.ok) {
      const newMajorList = Object.entries(majorData[0]).map(
        ([majorCode, majorName]) => ({
          value: majorCode,
          label: majorName
        })
      )
      updateMajorList(newMajorList)
      loadMajorFee()
    }
  }, [request, response, error, selection, updateMajorList, loadMajorFee])

  const loadFee = useCallback(async () => {
    const feeData = await request.post('/Calculator/GetCourseFee', selection)
    if (error) console.error(error)
    if (response.ok) {
      const fee = feeData[0]
      updateFee(fee)
      if (selection.feeCategory !== 'INTSA') {
        updatePage(PAGES.FEE_PAYING_SUMMARY)
      } else {
        updatePage(PAGES.STUDY_ABOARD_SUMMARY)
      }
    }
  }, [request, response, error, selection, updateFee, updatePage])

  const changeCourseHandler = event => {
    setSelection(prev => ({ ...prev, courseCode: event?.value }))
    setCourseName(event?.label)
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, year: `Starting ${event?.value}` }))
  }

  const submitHandler = event => {
    event.preventDefault()
    updateData({ ...selection, majorCode: '' })
    if (selection.feeCategory[0] !== 'D' || selection.feeCategory === 'DFPG') {
      loadFee()
    } else {
      loadMajor()
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Select Your Info:</h1>
      <br />
      <p>Select your course and starting year</p>
      <p>Click &quot;Help&quot; for descriptions.</p>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <br />
      <br />
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <label htmlFor='course'>Course:</label>
        <div className='row' style={{ width: '25%', margin: 'auto' }}>
          <Select
            name='course'
            inputId='course'
            options={courseList}
            isClearable
            placeholder={`eg. ${courseList?.[0]?.label}`}
            onChange={changeCourseHandler}
          />
        </div>
        <br />
        <label htmlFor='startyear'>Starting Year:</label>
        <div className='row' style={{ width: '25%', margin: 'auto' }}>
          <Select
            name='startyear'
            inputId='startyear'
            options={startYearList}
            isClearable
            placeholder='Choose your starting year'
            defaultValue={startYearList?.[0]}
            onChange={changeYearHandler}
          />
        </div>
        <br />
        <br />
        <div style={{ overflow: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <button id='prevBtn' type='button' onClick={prevPage}>
              Previous
            </button>
            <button
              id='nextBtn'
              disabled={!selection.courseCode || !selection.year}
              type='submit'
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeeCourseAndYear
