import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import FeeUnit from '../FeeCalculator/FeeUnit'
import PrintButton from '../PrintButton'

const Summary_D = props => {
  const {
    estimatedFee,
    updatePage,
    page,
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
    updatePage(PAGES.COURSE_AND_YEAR)
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
        <h1 style={{ fontWeight: 'bold' }}>Summary</h1>
        <br />
        <p style={{ textAlign: 'center' }}>
          If you take more/less than 48 credit points per year, your yearly fee
          may be different.
        </p>
        <hr style={{ width: '50%', margin: 'auto' }} />
        <br />
        <br />
		<table style="left-align:auto; right-align:auto">
		<tr>
			<td>Course Type</td>
			<td>
				<b>{data.feeCategoryName}</b>
			</td>
		</tr>
		<tr>
			<td>Fee Year</td>
			<td>
				<b>{data.feeYear}</b>
			</td>
		</tr>
		<tr>
			<td>Course Name</td>
			<td>
				<b>{estimatedFee.course_name}</b>
			</td>
		</tr>
		<tr>
			<td>Course Credit Point</td>
			<td>
				<b>{estimatedFee.course_credit_point}</b>
			</td>
		</tr>
		<tr>
			<td>Credit Point</td>
			<td>
				<b>{estimatedFee.creditpoint}</b>
			</td>
		</tr>
		<tr>
			<td>**Average Annual Fee</td>
			<td>
				<b>{estimatedFee.fee_median}</b>
			</td>
		</tr>
		<tr>
			<td>Typical Fee Range</td>
			<td>
				<b>{estimatedFee.fee_range}</b>
			</td>
		</tr>
		<tr className={selectedUnitList?.[0] ? '' : 'd-none'}>
			<td>
				<b>Total Credit Points</b>
			</td>
			<td>
				<b>{sumUnits().creditPoint</b>
			</td>
		</tr>
		<tr className={selectedUnitList?.[0] ? '' : 'd-none'}>
			<td>
				<b>Total Fee</b>
			</td>
			<td>
				<b>${sumUnits().fee}</b>
			</td>
		</tr>
		</table>
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
          <button
            id='prevBtn'
            type='button'
            onClick={goToPreviousPage}
            disabled={page !== PAGES.D_SUMMARY}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_D
