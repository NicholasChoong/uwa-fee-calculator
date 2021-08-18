import React, { useState, useEffect } from 'react'

const FeeTextField = () => {
  const [majorCode, setMajorCode] = useState('71520')
  const [isConnected, setIsConnected] = useState('')
  const [majorName, setMajorName] = useState('')

  useEffect(() => {
    fetch('/api').then(res =>
      res.json().then(data => setIsConnected(data.exampleMessage))
    )
    fetch('/api/getMajorName', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ CourseCode: '71520' })
    })
      .then(res => res.json())
      .then(data => {
        setMajorName(data.majorName)
        console.log(data.majorName)
      })
  }, [])
  //   setMajorName('majorName')
  const changeHandler = event => {
    // event.target represents a DOM element
    setMajorCode(event.target.value)
    console.log(event.target.value)
    fetch('/api/getMajorName', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({ CourseCode: event.target.value })
    })
      .then(res => res.json())
      .then(data => {
        setMajorName(data.majorName)
        console.log(data.majorName)
      })
  }

  return (
    <>
      <p>
        BH001 BH002 BH003 BH004 BH005 BH006 BH008 BH009 BP001 BP002 BP003 BP004
        BP006 BP007 BP008 BP009 BP011 BP012 BP014 BP021 CM002 CM003 CM004 CM005
        CM007 CM008 CM009 CM010 CM011 CM013 CM014 CM015 CM017 CM018 CU001 CU002
        CU003 CU004 CU006 DA001 DA002 DU001 DU002 DU003 DU004 DU006 DU021
      </p>
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        {isConnected
          ? isConnected
          : 'React client NOT connected to the Express server!'}
      </a>
      <p>Enter major code to get major name</p>
      <input
        type='text'
        placeholder='Enter a major code'
        value={majorCode}
        name='text'
        onChange={changeHandler}
        //   ref={focusRef}
      />
      <p>
        {majorCode}: {majorName}
      </p>
    </>
  )
}

export default FeeTextField
