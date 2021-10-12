import React from 'react'
import NavBar from '../../components/NavBar'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import FeeCalculator from '../../components/FeeCalculator'

// const FeeCalculator = lazy(() => import('../../components/FeeCalculator'))

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <FeeCalculator />
      <Footer />
    </>
  )
}

export default Home
