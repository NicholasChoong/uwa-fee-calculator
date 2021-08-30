import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Title from '../components/Title'
import FeeCalculator from '../components/FeeCalculator'

const App = () => {
  return (
    <>
      <div className=''>
        <NavBar />
        <Banner />
        <Title />
        <FeeCalculator />
      </div>
    </>
  )
}

export default App
