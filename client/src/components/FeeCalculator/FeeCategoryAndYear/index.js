import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'
import PAGES from '../../../libs/pageEnum'
import feeCategoriesOptions from '../../../libs/feeCategories.json'
import feeYearsOptions from '../../../libs/feeYears.json'

const currentYear = new Date().getFullYear()

const FeeCategoryAndYear = props => {
  const { updateData, updateCourseList, updatePage, page } = props
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    feeCategory: '',
    feeYear: `${currentYear.toString()}`
  })
  const [pressed, setPressed] = useState(false)

  const loadCoursesAndYears = useCallback(async () => {
    const initialData = await request.post('/Calculator/GetCourses', selection)
    if (error) console.error(error)
    if (response.ok) {
      const courses = initialData[0]
      const newCourseList = Object.entries(courses).map(
        ([courseCode, courseName]) => ({
          value: courseCode,
          label: courseName
        })
      )
      updateCourseList(newCourseList)
      updatePage(PAGES.COURSE_AND_YEAR)
    }
  }, [request, response, error, selection, updateCourseList, updatePage])

  const changeCategoryHandler = event => {
    setSelection(prev => ({
      ...prev,
      feeCategory: event?.value,
      feeCategoryName: event?.label
    }))
    setPressed(false)
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, feeYear: event?.value }))
    setPressed(false)
  }

  const submitHandler = event => {
    event.preventDefault()
    setPressed(true)
    if (selection.feeCategory !== 'DHR') {
      updateData({ ...selection, courseCode: '', year: '', majorName: '' })
      loadCoursesAndYears()
    } else {
      updatePage(PAGES.DHDR)
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Select Your Info:</h1>
      <br />
      <p>
        Select your Course Type from the list. Then select which year&apos;s
        fees to see.
      </p>
      <p>Click &quot;Help&quot; for descriptions.</p>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <br />
      <br />
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <label htmlFor='coursetype'>Course Type:</label>
        <div className='row tbox'>
          <Select
            name='coursetype'
            inputId='coursetype'
            options={feeCategoriesOptions}
            isClearable
            placeholder='eg. Domestic Undergraduate'
            onChange={changeCategoryHandler}
            isLoading={pressed || loading}
            isDisabled={pressed}
          />
        </div>
        <br />
        <label htmlFor='feeyear'>Fee Year:</label>
        <div className='row tbox'>
          <Select
            name='feeyear'
            inputId='feeyear'
            options={feeYearsOptions}
            isClearable
            placeholder={`eg. Fees for ${currentYear}`}
            defaultValue={feeYearsOptions[0]}
            onChange={changeYearHandler}
            isLoading={pressed || loading}
            isDisabled={pressed}
          />
        </div>
        <br />
        <br />
        <div style={{ overflow: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <button
              id='nextBtn'
              disabled={
                !error &&
                (pressed ||
                  page !== PAGES.STUDENT_AND_YEAR ||
                  loading ||
                  !selection.feeCategory ||
                  !selection.feeYear)
              }
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

export default FeeCategoryAndYear
