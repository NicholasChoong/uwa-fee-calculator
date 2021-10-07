import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'

const Summary_SA = props => {
  const { fee, updatePage } = props
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
        <p>
          Course Name - <b>{fee.course_name}</b>
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

export default Summary_SA
