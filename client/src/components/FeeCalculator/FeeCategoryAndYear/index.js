import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'
import PAGES from '../../../libs/pageEnum'
import feeCategoriesOptions from '../../../libs/feeCategories.json'
import feeYearsOptions from '../../../libs/feeYears.json'

const currentYear = new Date().getFullYear()

const FeeCategoryAndYear = props => {
  const { updateData, updateCourseListAndYearList, nextPage, updatePage } =
    props
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
      const courses = initialData[0]
      const years = initialData[1]
      const newCourseList = Object.entries(courses).map(
        ([courseCode, courseName]) => ({
          value: courseCode,
          label: courseName
        })
      )
      const newYearList = years.map(year => ({
        value: year,
        label: `Starting ${year}`
      }))
      updateCourseListAndYearList(newCourseList, newYearList)
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
    if (selection.feeCategory !== 'DHR') {
      updateData({ ...selection, courseCode: '', year: '' })
      loadCoursesAndYears()
    } else {
      updatePage(PAGES.DHDR)
    }
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <div className='mb-3 course-type-form-group'>
            <label htmlFor='course-type-input'>Choose your course type</label>
            <Select
              inputId='course-type-input'
              options={feeCategoriesOptions}
              isClearable
              placeholder='eg. Domestic Undergraduate'
              onChange={changeCategoryHandler}
            />
          </div>
          <div className='mb-3 fee-year-form-group'>
            <label htmlFor='fee-year-input'>Choose a fee year</label>
            <Select
              inputId='fee-year-input'
              options={feeYearsOptions}
              isClearable
              placeholder={`eg. Fees for ${currentYear}`}
              defaultValue={feeYearsOptions[0]}
              onChange={changeYearHandler}
            />
          </div>
          <button
            disabled={!selection.feeCategory || !selection.feeYear}
            type='submit'
          >
            Next
          </button>
        </div>
      </form>
      {/* {nextStep && <FeeCourseAndYear selection={selection} />} */}
    </>
  )
}

export default FeeCategoryAndYear
