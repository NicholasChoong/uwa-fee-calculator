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
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <div className='mb-3 unit-form-group'>
            <label htmlFor='unit-input'>Choose your units</label>
            <Select
              inputId='unit-input'
              options={unitList}
              value={unit}
              isClearable
              placeholder={`eg. ${unitList?.[0]?.label}`}
              onChange={changeHandler}
              filterOption={createFilter({ ignoreAccents: false })}
              components={{ MenuList }}
              //   openMenuOnClick={false}
            />
          </div>{' '}
          <button
            className='btn btn-primary'
            disabled={!unit || !noDuplicates()}
            type='submit'
          >
            Add Unit
          </button>
          <p>Total - ${sumUnitFee()}</p>
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
          <button
            className='btn btn-primary'
            type='button'
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <button
            className='btn btn-primary'
            // disabled={!selection.unit}
            type='button'
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </form>
    </>
  )
}

export default FeeUnit