import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select, { createFilter } from 'react-select'
import { MdClose } from 'react-icons/md'
import MenuList from '../../MenuList'

const FeeUnit = props => {
  const {
    data,
    // prevPage,
    // nextPage,
    // updatePage,
    unitList,
    selectedUnitList,
    addSelectedUnit,
    removeSelectedUnit
    // clearSelectedUnit,
    // updateTotalFee
  } = props

  const [request, response, loading, error] = useFetch()
  const [unit, setUnit] = useState({ label: '', value: '' })

  const loadUnitInfo = useCallback(async () => {
    const unitData = await request.post('/Calculator/GetUnitInfo', {
      ...data,
      unit: `${unit.label} [${unit.value}]`
    })
    if (error) console.error(error)
    if (response.ok) {
      const newUnit = {
        name: unit.label,
        code: unit.value,
        creditPoint: Number(unitData[0].creditpoint),
        fee: Number(unitData[0].fee)
      }
      addSelectedUnit(newUnit)
      setUnit(null)
    }
  }, [request, response, error, data, unit, addSelectedUnit])

  const changeHandler = event => {
    setUnit(event)
  }

  const submitHandler = event => {
    event.preventDefault()
    if (noDuplicates()) {
      loadUnitInfo()
    }
  }

  const noDuplicates = () => {
    const unitsList = [...selectedUnitList, { code: unit?.value }]
    const uniqueUnits = new Set(unitsList.map(unit => unit.code))
    return uniqueUnits.size === unitsList.length
  }

  return (
    <>
      <br />
      <br />
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div className='d-print-none'>
          <label htmlFor='unitSelect'>Select Your Units:</label>
          <div className='row' style={{ width: '40%', margin: 'auto' }}>
            <Select
              name='unitSelect'
              inputId='unitSelect'
              options={unitList}
              value={unit?.value ? unit : ''}
              isClearable
              placeholder={`eg. ${unitList?.[0]?.label}`}
              onChange={changeHandler}
              filterOption={createFilter({ ignoreAccents: false })}
              components={{ MenuList }}
              //   openMenuOnClick={false}
            />
          </div>
          <br />
          <button
            id='nextBtn'
            disabled={!unit?.value || !noDuplicates()}
            type='submit'
          >
            Add Unit
          </button>
        </div>
        <br className='d-print-none' />
        <h4 className={selectedUnitList?.[0] ? '' : 'd-none'}>
          <b>
            <u>Your Selected Units</u>
          </b>
        </h4>
        <br className='d-print-none' />
        {selectedUnitList &&
          selectedUnitList.map((unit, index) => (
            <>
              <div key={index}>
                <p>
                  {`${unit.name} [${unit.code}]`}
                  <MdClose
                    onClick={() => removeSelectedUnit(unit.code)}
                    className='delete-icon d-print-none'
                  />
                </p>
                <p>
                  Credit Points - <b>{unit.creditPoint}</b>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Fee - <b>${unit.fee}</b>
                </p>
              </div>
              <br />
            </>
          ))}
      </form>
    </>
  )
}

export default FeeUnit
