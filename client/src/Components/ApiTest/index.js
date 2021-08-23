import React, { useState, useEffect } from 'react'

const ApiTest = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    fetch('/Calculator/GetCourses', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ feeCategory: 'INTUG', feeYear: '2021' })
    })
      .then(res => res.json())
      .then(data => {
        setData(JSON.stringify(data, null, 2))
      })
  }, [])
  return <pre>{data}</pre>
}

export default ApiTest
