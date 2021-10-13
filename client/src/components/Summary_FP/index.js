import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import NumberFormat from 'react-number-format'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'

const Summary_FP = props => {
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
        <table style={{ margin: 'auto' }}>
          <tr>
            <td className='courseDetails'>Course Type</td>
            <td>
              <b>{data.feeCategoryName}</b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Fee Year</td>
            <td>
              <b>{data.feeYear}</b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Course Name</td>
            <td>
              <b>{fee.course_name}</b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Annual Credit Points</td>
            <td>
              <b>{fee.annual_credit_point}</b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Total Course Credit Points</td>
            <td>
              <b>{fee.course_credit_point}</b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Fee per Credit Point</td>
            <td>
              <b>
                <NumberFormat
                  value={fee.fee_per_credit_point}
                  displayType='text'
                  thousandSeparator={true}
                  prefix='$'
                />
              </b>
            </td>
          </tr>
          <tr>
            <td className='courseDetails'>Fee per EFTSL</td>
            <td>
              <b>
                <NumberFormat
                  value={fee.fee}
                  displayType='text'
                  thousandSeparator={true}
                  prefix='$'
                />
              </b>
            </td>
          </tr>
          <tr>
            <td className='totals'>Total Course Fee</td>
            <td>
              <b>
                <NumberFormat
                  value={fee.total_fee}
                  displayType='text'
                  thousandSeparator={true}
                  prefix='$'
                />
              </b>
            </td>
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
            disabled={page !== PAGES.FEE_PAYING_SUMMARY}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_FP
