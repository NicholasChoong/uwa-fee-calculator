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
    updateMajorList
  } = props
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    ...data,
    courseCode: '',
    year: startYearList[0].label
  })

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
      nextPage()
    }
  }, [request, response, error, selection, updateMajorList, nextPage])

  const loadFee = useCallback(async () => {
    const feeData = await request.post('/Calculator/GetCourseFee', selection)
    if (error) console.error(error)
    if (response.ok) {
      const fee = feeData[0]
      updateFee({ fee: fee })
      if (selection.feeCategory[0] !== 'D') {
        updatePage(PAGES.SUMMARY)
      } else {
        loadMajor()
      }
    }
  }, [request, response, error, selection, updateFee, updatePage, loadMajor])

  const changeCourseHandler = event => {
    setSelection(prev => ({ ...prev, courseCode: event?.value }))
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, year: `Starting ${event?.value}` }))
  }

  const submitHandler = event => {
    event.preventDefault()
    updateData({ ...selection, majorCode: '' })
    loadFee()
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <div className='mb-3 course-form-group'>
            <label htmlFor='course-input'>Choose your course</label>
            <Select
              inputId='course-input'
              options={courseList}
              isClearable
              placeholder={`eg. ${courseList[0].label}`}
              onChange={changeCourseHandler}
            />
          </div>
          <div className='mb-3 starting-year-form-group'>
            <label htmlFor='starting-year-input'>
              Choose your starting year
            </label>
            <Select
              inputId='starting-year-input'
              options={startYearList}
              isClearable
              placeholder='Choose your starting year'
              defaultValue={startYearList[0]}
              onChange={changeYearHandler}
            />
          </div>
          <button className='btn btn-primary' type='button' onClick={prevPage}>
            Previous
          </button>
          <button
            className='btn btn-primary'
            disabled={!selection.courseCode || !selection.year}
            type='submit'
          >
            Next
          </button>
        </div>
      </form>
    </>
  )
}

export default FeeCourseAndYear
