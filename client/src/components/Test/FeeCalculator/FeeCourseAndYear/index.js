import React, { useState, useEffect, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'

const FeeCourseAndYear = props => {
  const { categoryYear } = props
  const [majorList, setMajorList] = useState([])
  const [yearList, setYearList] = useState([])
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    ...categoryYear,
    courseCode: '',
    year: ''
  })
  const [courseFee, setCourseFee] = useState({})

  const loadCoursesAndYears = useCallback(async () => {
    const initialData = await request.post(
      '/Calculator/GetCourses',
      categoryYear
    )
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
      setMajorList(newMajorList)
      setYearList(newYearList)
    }
  }, [request, response, error, categoryYear])

  const loadFee = useCallback(async () => {
    const data = await request.post('/Calculator/GetCourseFee', selection)
    if (error) console.error(error)
    if (response.ok) {
      const fee = data[0]
      setCourseFee(fee)
    }
  }, [request, response, error, selection])

  useEffect(() => {
    loadCoursesAndYears()
  }, [loadCoursesAndYears])

  const changeCourseHandler = event => {
    setSelection(prev => ({ ...prev, courseCode: event?.value }))
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, year: `Starting ${event?.value}` }))
  }

  const submitHandler = event => {
    event.preventDefault()
    loadFee()
    console.dir(selection)
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <Select
            options={majorList}
            isClearable
            placeholder='Choose your course'
            onChange={changeCourseHandler}
          />
          <Select
            options={yearList}
            isClearable
            placeholder='Choose your starting year'
            onChange={changeYearHandler}
          />
          <button
            disabled={!selection.courseCode || !selection.year}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      {courseFee && (
        <code>
          <pre>{JSON.stringify(courseFee, null, 2)}</pre>
        </code>
      )}
    </>
  )
}

export default FeeCourseAndYear
