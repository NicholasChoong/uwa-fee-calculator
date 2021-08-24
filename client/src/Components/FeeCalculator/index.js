import React, { useState, useEffect, useRef } from 'react'
// import { useFetch } from 'use-http'
import Select from 'react-select'
import feeCategoriesOptions from '../../Libs/feeCategories.json'
import feeYearsOptions from '../../Libs/feeYears.json'
import FeeCourseAndYear from './FeeCourseAndYear'

const FeeCalculator = () => {
  const [selection, setSelection] = useState({
    feeCategory: '',
    feeYear: '2021'
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
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <Select
            options={feeCategoriesOptions}
            isClearable
            placeholder='Choose your student type'
            onChange={changeCategoryHandler}
            ref={focusRef}
          />
          <Select
            options={feeYearsOptions}
            isClearable
            placeholder='Choose a fee year'
            defaultValue={feeYearsOptions[0]}
            onChange={changeYearHandler}
          />
          <button
            disabled={!selection.feeCategory || !selection.feeYear}
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
      {nextStep && <FeeCourseAndYear categoryYear={selection} />}
    </>
  )
}

export default FeeCalculator
