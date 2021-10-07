import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'
import PAGES from '../../../libs/pageEnum'

const FeeMajor = props => {
  const { data, updateData, prevPage, updatePage, majorList, updateUnitList } =
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
      updatePage(PAGES.D_SUMMARY)
    }
  }, [request, response, error, selection, updateUnitList, updatePage])

  const changeMajorHandler = event => {
    setSelection(prev => ({ ...prev, majorCode: event?.value }))
  }

  const submitHandler = event => {
    event.preventDefault()
    updateData(selection)
    loadUnits()
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Select Your Major:</h1>
      <br />
      <p style={{ textAlign: 'center' }}>
        1 EFTSL is the Equivalent Full Time Study Load for a standard full time
        enrolment of 48 credit points per year.{' '}
      </p>
      <p>
        If you take more/less than 48 credit points per year, your yearly fee
        may be different.
      </p>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <br />
      <br />
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <label htmlFor='majorSelect'>Select Your Major:</label>
        <div className='row' style={{ width: '40%', margin: 'auto' }}>
          <Select
            name='majorSelect'
            inputId='majorSelect'
            options={majorList}
            isClearable
            placeholder={`eg. ${majorList?.[0]?.label}`}
            onChange={changeMajorHandler}
          />
        </div>
        <br />
        <br />
        <div style={{ overflow: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <button id='prevBtn' type='button' onClick={prevPage}>
              Previous
            </button>
            <button id='nextBtn' disabled={!selection.majorCode} type='submit'>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeeMajor
