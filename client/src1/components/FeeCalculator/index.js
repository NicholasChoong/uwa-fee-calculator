import React, { useState, useEffect, useRef } from 'react'
import Form from 'react-bootstrap/Form'
// import { useFetch } from 'use-http'
import Select from 'react-select'
import feeCategoriesOptions from '../../libs/feeCategories.json'
import feeYearsOptions from '../../libs/feeYears.json'
import FeeCourseAndYear from './FeeCourseAndYear'

const currentYear = new Date().getFullYear()

const FeeCalculator = () => {
  const [selection, setSelection] = useState({
    feeCategory: '',
    feeYear: `${currentYear.toString()}`
  })
  const [nextStep, setNextStep] = useState(false)

  const focusRef = useRef()
  const node = focusRef.current
  useEffect(() => {
    node?.focus()
  })

  const changeCategoryHandler = event => {
    setSelection(prev => ({ ...prev, feeCategory: event?.value }))
  }

  const changeYearHandler = event => {
    setSelection(prev => ({ ...prev, feeYear: event?.value }))
  }

  const submitHandler = event => {
    event.preventDefault()
    setNextStep(prev => !prev)
    console.dir(selection)
  }

  return (
    <>
      {/* {error && 'Error!'}
      {loading && 'Loading...'} */}
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
              ref={focusRef}
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
            Submit
          </button>
        </div>
      </Form>
      {nextStep && <FeeCourseAndYear categoryYear={selection} />}
    </>
  )
}

export default FeeCalculator
