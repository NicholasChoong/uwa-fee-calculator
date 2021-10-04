import React from 'react'

const Summary_D = props => {
  const { estimatedFee, totalFee } = props
  return (
    <>
      <h1 style={{ fontWeight: 'bold' }}>Summary:</h1>
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
      <p>
        Total Calculated Fee - <b>${totalFee}</b>
      </p>
      <br />
      <br />
    </>
  )
}

export default Summary_D
