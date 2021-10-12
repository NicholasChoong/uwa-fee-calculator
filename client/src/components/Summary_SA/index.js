import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'

const Summary_SA = props => {
  const { data, fee, updatePage, page } = props
  const componentRef = useRef()
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
        <hr style={{ width: '50%', margin: 'auto' }} />
        <br />
        <br />
        <table style="left-align:auto; right-align:auto">
		<tr>
			<td>Course Type</td>
			<td><b>{data.feeCategoryName}</b></td>
        </tr>
        <tr>
			<td>Fee Year</td>
			<td><b>{data.feeYear}</b></td>
        </tr>
        <tr>
			<td>Course Name</td>
			<td><b>{fee.course_name}</b></td>
        </tr>
        <tr>
			<td>Total Course Fee</td>
			<td><b>{fee.total_fee}</b></td>
        </tr>
		</table>
        <br />
        <br />
      </div>
      <div style={{ overflow: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <button
            id='prevBtn'
            type='button'
            onClick={() => updatePage(PAGES.COURSE_AND_YEAR)}
            disabled={page !== PAGES.STUDY_ABOARD_SUMMARY}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_SA
