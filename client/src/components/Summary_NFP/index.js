import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import logo from '../../assets/images/UWA-logo-dark.svg'
import PAGES from '../../libs/pageEnum'
import PrintButton from '../PrintButton'

const Summary_NFP = props => {
  const { updatePage, page } = props
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
          <span>
            You pay no tuition fee under the{' '}
            <a href='https://study.uwa.edu.au/fees-and-scholarships/research-training-program'>
              Research Training Program
            </a>
          </span>
        </p>
        <br />
        <br />
      </div>
      <div style={{ overflow: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <button
            id='prevBtn'
            type='button'
            onClick={() => updatePage(PAGES.STUDENT_AND_YEAR)}
            disabled={page !== PAGES.DHDR}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  )
}

export default Summary_NFP
