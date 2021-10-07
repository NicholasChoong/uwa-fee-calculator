import React from 'react'

const Steps = props => {
  const { page } = props
  console.log(page)
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <span className={page === 1 ? 'step active' : 'step finish'}></span>
      <span
        className={
          page === 2 ? 'step active' : page > 2 ? 'step finish' : 'step'
        }
      ></span>
      <span className={page > 2 ? 'step active' : 'step'}></span>
    </div>
  )
}

export default Steps
