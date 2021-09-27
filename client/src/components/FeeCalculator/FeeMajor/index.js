import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'

const FeeMajor = props => {
  const { data, updateData, prevPage, nextPage, majorList, updateUnitList } =
    props

  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({
    ...data,
    majorCode: ''
  })

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
      nextPage()
    }
  }, [request, response, error, selection, updateUnitList, nextPage])

  const changeMajorHandler = event => {
    setSelection(prev => ({ ...prev, majorCode: event?.value }))
  }

  const submitHandler = event => {
    event.preventDefault()
    updateData(selection)
    loadUnits()
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <div className='mb-3 major-form-group'>
            <label htmlFor='major-input'>Choose your major</label>
            <Select
              inputId='major-input'
              options={majorList}
              isClearable
              placeholder={`eg. ${majorList?.[0]?.label}`}
              onChange={changeMajorHandler}
            />
          </div>

          <button className='btn btn-primary' type='button' onClick={prevPage}>
            Previous
          </button>
          <button
            className='btn btn-primary'
            disabled={!selection.majorCode}
            type='submit'
          >
            Next
          </button>
        </div>
      </form>
    </>
  )
}

export default FeeMajor
