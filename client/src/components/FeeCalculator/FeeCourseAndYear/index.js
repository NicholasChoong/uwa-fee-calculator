import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'

const FeeCourseAndYear = props => {
  const {
    data,
    updateData,
    courseList,
    startYearList,
    updateFee,
    prevPage,
    nextPage
  } = props
  //   const data = getData()
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    ...data,
    courseCode: '',
    year: ''
  })

  const loadFee = useCallback(async () => {
    const data = await request.post('/Calculator/GetCourseFee', selection)
    if (error) console.error(error)
    if (response.ok) {
      const fee = data[0]
      //   console.dir(fee)
      updateFee({ fee: fee })
      nextPage()
    }
  }, [request, response, error, selection, updateFee, nextPage])

  const changeCourseHandler = event => {
    setSelection(prev => ({ ...prev, courseCode: event?.value }))
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, year: `Starting ${event?.value}` }))
  }

  const submitHandler = event => {
    event.preventDefault()
    updateData({ data: selection })
    loadFee()
  }

  //   console.dir(getData())
  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <Select
            options={courseList}
            isClearable
            placeholder='Choose your course'
            onChange={changeCourseHandler}
          />
          <Select
            options={startYearList}
            isClearable
            placeholder='Choose your starting year'
            onChange={changeYearHandler}
          />
          <button type='button' onClick={prevPage}>
            Previous
          </button>
          <button
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
