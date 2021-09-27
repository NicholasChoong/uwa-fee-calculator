// import React, { useState, useCallback } from 'react'
import React from 'react'
// import { useFetch } from 'use-http'
import Select, { createFilter } from 'react-select'
import { FixedSizeList as List } from 'react-window'

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
    // data,
    // test,
    // test1,
    // test2,
    // updateData,
    prevPage,
    // nextPage,
    unitList
    // updateUnitList
  } = props

  //   const [request, response, loading, error] = useFetch()
  //   const [selection, setSelection] = useState({
  //     ...data,
  //     majorCode: ''
  //   })

  //   const loadUnits = useCallback(async () => {
  //     const unitsData = await request.post('/Calculator/GetUnitsForMajor', {
  //       majorCode: 'all',
  //       feeYear: selection.feeYear
  //     })
  //     if (error) console.error(error)
  //     if (response.ok) {
  //       const newUnitList = Object.entries(unitsData[0]).map(
  //         ([unitCode, unitName]) => ({
  //           value: unitCode,
  //           label: unitName
  //         })
  //       )
  //       updateUnitList(newUnitList)
  //       nextPage()
  //     }
  //   }, [request, response, error, selection, updateUnitList, nextPage])

  //   const changeMajorHandler = event => {
  //     setSelection(prev => ({ ...prev, majorCode: event?.value }))
  //   }

  const submitHandler = event => {
    event.preventDefault()
  }

  return (
    <>
      {/* {error && 'Error!'}
      {loading && 'Loading...'} */}
      <form onSubmit={submitHandler}>
        <div style={{ maxWidth: '600px' }}>
          <div className='mb-3 unit-form-group'>
            <label htmlFor='unit-input'>Choose your units</label>
            <Select
              inputId='unit-input'
              options={unitList}
              isClearable
              placeholder={`eg. ${unitList[0].label}`}
              //   onChange={changeMajorHandler}
              filterOption={createFilter({ ignoreAccents: false })}
              components={{ MenuList }}
              //   openMenuOnClick={false}
            />
          </div>

          <button className='btn btn-primary' type='button' onClick={prevPage}>
            Previous
          </button>
          {/* <button disabled={!selection.unit} type='submit'>
            Next
          </button> */}
        </div>
      </form>
      {/* {unitList &&
        unitList.map(unit => (
          <p key={unit.value}>
            {'[' + unit.value + ']'} {unit.label}
          </p>
        ))} */}
    </>
  )
}

export default FeeUnit
