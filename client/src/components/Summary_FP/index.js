import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'

const Summary_FP = props => {
  const { fee, updatePage } = props
  const componentRef = useRef()
  return (
    <div style={{ textAlign: 'center' }}>
      <ReactToPrint
        trigger={PrintButton}
        content={() => componentRef.current}
      />
      <div ref={componentRef} style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
        <hr style={{ width: '50%', margin: 'auto' }} />
        <br />
        <br />
        <p>
          Course Name - <b>{fee.course_name}</b>
        </p>
        <p>
          Annual Credit Point - <b>{fee.annual_credit_point}</b>
        </p>
        <p>
          Course Credit Point - <b>{fee.course_credit_point}</b>
        </p>
        <p>
          Fee per Credit Point - <b>{fee.fee_per_credit_point}</b>
        </p>
        <p>
          Fee per EFTSL - <b>{fee.fee}</b>
        </p>
        <p>
          Total Course Fee - <b>{fee.total_fee}</b>
        </p>
        <br />
        <br />
      </div>
      <div style={{ overflow: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <button
            id='prevBtn'
            type='button'
            onClick={() => updatePage(PAGES.COURSE_AND_YEAR)}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_FP
