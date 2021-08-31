import React from 'react'
import Container from 'react-bootstrap/Container'
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
      <Container as='main' className=''>
        <Title />
        <FeeCalculator />
      </Container>
      <Footer />
    </>
  )
}

export default App
