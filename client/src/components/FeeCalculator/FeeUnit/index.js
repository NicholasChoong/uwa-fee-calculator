import React, { useState, useCallback } from 'react'
import { useFetch } from 'use-http'
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'
import { MdClose } from 'react-icons/md'
import PAGES from '../../../libs/pageEnum'

const height = 55

const MenuList = props => {
  const { options, children, maxHeight, getValue } = props
  const [value] = getValue()
  const initialOffset = options.indexOf(value) * height

  return (
    <List
      height={maxHeight}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => <div style={style}>{children[index]}</div>}
    </List>
  )
}

const FeeUnit = props => {
  const {
    data,
    prevPage,
    nextPage,
    updatePage,
    unitList,
    selectedUnitList,
    addSelectedUnit,
    removeSelectedUnit,
    clearSelectedUnit,
    updateTotalFee
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
    // console.dir(event)
  }

  const submitHandler = event => {
    event.preventDefault()
    if (noDuplicates()) {
      loadUnitInfo()
    }
  }

  const goToPreviousPage = () => {
    if (data.feeCategory === 'DUG') {
      prevPage()
    } else {
      updatePage(PAGES.COURSE_AND_YEAR)
    }
    clearSelectedUnit()
  }

  const noDuplicates = () => {
    const unitsList = [...selectedUnitList, { code: unit?.value }]
    const uniqueUnits = new Set(unitsList.map(unit => unit.code))
    return uniqueUnits.size === unitsList.length
  }

  const sumUnitFee = () => {
    if (selectedUnitList.length > 0) {
      const totalFee = selectedUnitList.reduce((total, unit) => ({
        fee: total.fee + unit.fee
      }))
      updateTotalFee(totalFee.fee)
      return totalFee.fee
    }
    return 0
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold' }}>Select Your Units:</h1>
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
        <label htmlFor='unitSelect'>Select Your Units:</label>
        <div className='row' style={{ width: '40%', margin: 'auto' }}>
          <Select
            name='unitSelect'
            inputId='unitSelect'
            options={unitList}
            value={unit}
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
          className='btn btn-primary'
          disabled={!unit || !noDuplicates()}
          type='submit'
        >
          Add Unit
        </button>
        <h2>Total - ${sumUnitFee()}</h2>
        {selectedUnitList &&
          selectedUnitList.map(unit => (
            <>
              <div key={unit.code}>
                <p>
                  {`${unit.name} [${unit.code}]`}
                  <MdClose
                    onClick={() => removeSelectedUnit(unit.code)}
                    className='delete-icon'
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
        <br />
        <br />
        <div style={{ overflow: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <button id='prevBtn' type='button' onClick={goToPreviousPage}>
              Previous
            </button>
            <button id='nextBtn' type='button' onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FeeUnit
