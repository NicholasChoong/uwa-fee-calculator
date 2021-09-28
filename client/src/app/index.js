import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Title from '../components/Title'
import FeeCalculator from '../components/FeeCalculator'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <main className=''>
        <Title />
        <FeeCalculator />
      </main>
      <Footer />
    </>
  )
}

export default App
