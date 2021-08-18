import React from 'react'
import FeeTextField from '../Components/FeeTextField'
import Buttons from '../Components/Buttons'
import ButtonsReact from '../Components/ButtonsReact'
import './index.css'

const App = () => {
  return (
    <>
      <Buttons />
      <br />
      <ButtonsReact />
      <div className='App'>
        <header className='App-header'>
          <FeeTextField />
        </header>
      </div>
    </>
  )
}

export default App
