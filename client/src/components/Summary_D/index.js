import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import FeeUnit from '../FeeCalculator/FeeUnit'
import PrintButton from '../PrintButton'

const Summary_D = props => {
  const {
    estimatedFee,
    // totalFee,
    updatePage,
    data,
    unitList,
    selectedUnitList,
    addSelectedUnit,
    removeSelectedUnit,
    clearSelectedUnit,
    updateTotalFee
  } = props
  const componentRef = useRef()

  const goToPreviousPage = () => {
    if (data.feeCategory === 'DUG') {
      updatePage(PAGES.MAJOR)
    } else {
      updatePage(PAGES.COURSE_AND_YEAR)
    }
    clearSelectedUnit()
  }

  const sumUnits = () => {
    if (selectedUnitList.length > 0) {
      const total = selectedUnitList.reduce((total, unit) => ({
        fee: total.fee + unit.fee,
        creditPoint: total.creditPoint + unit.creditPoint
      }))
      return total
    }
    return 0
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <ReactToPrint
        trigger={PrintButton}
        content={() => componentRef.current}
      />
      <div ref={componentRef} style={{ textAlign: 'center' }}>
        <img
          className={'d-none d-print-block'}
          src={logo}
          width='200'
          height='50'
          alt='UWA Logo'
        />
        <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
        <br />
        <p style={{ textAlign: 'center' }}>
          1 EFTSL is the Equivalent Full Time Study Load for a standard full
          time enrolment of 48 credit points per year.{' '}
        </p>
        <p>
          If you take more/less than 48 credit points per year, your yearly fee
          may be different.
        </p>
        <hr style={{ width: '50%', margin: 'auto' }} />
        <br />
        <br />
        <p>
          Course Name - <b>{estimatedFee.course_name}</b>
        </p>
        <p>
          Course Credit Point - <b>{estimatedFee.course_credit_point}</b>
        </p>
        <p>
          Credit Point - <b>{estimatedFee.creditpoint}</b>
        </p>
        <p>
          **Average Annual Fee - <b>{estimatedFee.fee_median}</b>
        </p>
        <p>
          Typical Fee Range - <b>{estimatedFee.fee_range}</b>
        </p>
        <h4 className={selectedUnitList?.[0] ? '' : 'd-none'}>
          <b>Total Credit Points - {sumUnits().creditPoint}</b>
        </h4>
        <h2 className={selectedUnitList?.[0] ? '' : 'd-none'}>
          <b>Total Fee - ${sumUnits().fee}</b>
        </h2>
        <FeeUnit
          data={data}
          unitList={unitList}
          selectedUnitList={selectedUnitList}
          addSelectedUnit={addSelectedUnit}
          removeSelectedUnit={removeSelectedUnit}
          clearSelectedUnit={clearSelectedUnit}
          updateTotalFee={updateTotalFee}
        />
        <br />
        <br />
      </div>
      <div style={{ overflow: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <button id='prevBtn' type='button' onClick={goToPreviousPage}>
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_D
