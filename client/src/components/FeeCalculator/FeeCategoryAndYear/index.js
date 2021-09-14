import React, { useState, useCallback } from 'react'
import Form from 'react-bootstrap/Form'
import { useFetch } from 'use-http'
import Select from 'react-select'
import feeCategoriesOptions from '../../../libs/feeCategories.json'
import feeYearsOptions from '../../../libs/feeYears.json'

const currentYear = new Date().getFullYear()

const FeeCategoryAndYear = props => {
  const { updateData, updateCourseListAndYearList, nextPage } = props
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    feeCategory: '',
    feeYear: `${currentYear.toString()}`
  })

  const changeCategoryHandler = event => {
    setSelection(prev => ({ ...prev, feeCategory: event?.value }))
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, feeYear: event?.value }))
  }

  const loadCoursesAndYears = useCallback(async () => {
    const initialData = await request.post('/Calculator/GetCourses', selection)
    if (error) console.error(error)
    if (response.ok) {
      const majors = initialData[0]
      const years = initialData[1]
      const newMajorList = Object.entries(majors).map(
        ([majorCode, majorName]) => ({
          value: majorCode,
          label: majorName
        })
      )
      const newYearList = years.map(year => ({
        value: year,
        label: `Starting ${year}`
      }))
      updateCourseListAndYearList({
        courseList: newMajorList,
        startYearList: newYearList
      })
      nextPage()
    }
  }, [
    request,
    response,
    error,
    selection,
    updateCourseListAndYearList,
    nextPage
  ])

  const submitHandler = event => {
    event.preventDefault()
    updateData({ data: { ...selection, courseCode: '', year: '' } })
    loadCoursesAndYears()
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <Form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <Form.Group className='mb-3' controlId='formBasicStudent'>
            <Form.Label htmlFor='student-type-input'>Student Type</Form.Label>
            <Select
              inputId='student-type-input'
              options={feeCategoriesOptions}
              isClearable
              placeholder='Choose your student type'
              onChange={changeCategoryHandler}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicYear'>
            <Form.Label htmlFor='fee-year-input'>Fee Year</Form.Label>
            <Select
              inputId='fee-year-input'
              options={feeYearsOptions}
              isClearable
              placeholder='Choose a fee year'
              defaultValue={feeYearsOptions[0]}
              onChange={changeYearHandler}
            />
          </Form.Group>
          <button
            disabled={!selection.feeCategory || !selection.feeYear}
            type='submit'
          >
            Next
          </button>
        </div>
      </Form>
      {/* {nextStep && <FeeCourseAndYear selection={selection} />} */}
    </>
  )
}

export default FeeCategoryAndYear
