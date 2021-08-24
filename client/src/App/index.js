import React from 'react'
// import FeeTextField from '../Components/FeeTextField'
// import ApiTest2 from '../Components/Test/ApiTest2'
import FeeCalculator from '../Components/FeeCalculator'
import Buttons from '../Components/Test/Buttons'
import ButtonsReact from '../Components/Test/ButtonsReact'
// import './index.css'

const App = () => {
  return (
    <>
      <Buttons />
      <br />
      <ButtonsReact />
      <div className=''>
        <FeeCalculator />
      </div>
    </>
  )
}

export default App
