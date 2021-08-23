import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useFetch } from 'use-http'
import Select from 'react-select'

const ApiTest2 = () => {
  const [data, setData] = useState('')
  const [majorList, setMajorList] = useState([])
  const [request, response, loading, error] = useFetch()
  const [selection, setSelection] = useState({ value: '', label: '' })

  const focusRef = useRef()

  const loadInitialData = useCallback(async () => {
    const initialData = await request.post('/Calculator/GetCourses', {
      feeCategory: 'INTUG',
      feeYear: '2021'
    })
    if (response.ok) {
      setData(JSON.stringify(initialData[0], null, 2))
      const newMajorList = Object.entries(initialData[0]).map(obj => ({
        value: obj[0],
        label: obj[1]
      }))
      setMajorList(newMajorList)
    }
  }, [request, response])

  useEffect(() => {
    const node = focusRef.current
    node.focus()
  })

  useEffect(() => {
    loadInitialData()
  }, [loadInitialData])

  const changeHandler = event => {
    setSelection({ value: event?.value, label: event?.label })
  }

  const submitHandler = event => {
    event.preventDefault()
    console.dir(selection)
  }

  return (
    <>
      {error && 'Error!'}
      {loading && 'Loading...'}
      <form onSubmit={submitHandler}>
        <Select
          options={majorList}
          isClearable={true}
          placeholder='Choose a Major'
          onChange={changeHandler}
          ref={focusRef}
        />
        <button type='submit'>Submit</button>
      </form>
      <code>
        <pre>{data}</pre>
      </code>
    </>
  )
}

export default ApiTest2
