import React from 'react'
import PAGES from '../../libs/pageEnum'

const Steps = props => {
  const { page } = props
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <span
        className={
          page === PAGES.STUDENT_AND_YEAR ? 'step active' : 'step finish'
        }
      ></span>
      <span
        className={
          page === PAGES.COURSE_AND_YEAR
            ? 'step active'
            : page > PAGES.COURSE_AND_YEAR
            ? 'step finish'
            : 'step'
        }
      ></span>
      <span
        className={page > PAGES.COURSE_AND_YEAR ? 'step active' : 'step'}
      ></span>
    </div>
  )
}

export default Steps
