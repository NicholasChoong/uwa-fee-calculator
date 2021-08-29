import React, { useState } from 'react'
import Dropdown from './Dropdown'
import './index.css'

const Navbar = () => {
  //   const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(true)

  //   const clickHandler = () => {
  //     setClick(prev => !prev)
  //     console.log('Clicked')
  //   }

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false)
    } else {
      setDropdown(true)
    }
  }

  return (
    <header>
      <div className='p-0 container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <nav className='navbar navbar-light'>
              <div className='container'>
                <a className='navbar-brand' href='https://www.uwa.edu.au'>
                  <img
                    src='https://www.uwa.edu.au/Assets/Foundation/Assets/img/UWA-logo-dark.svg'
                    width='200'
                    height='50'
                    alt='UWA Logo'
                  />
                </a>
              </div>
            </nav>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarSupportedContent'
            >
              <ul className='nav justify-content-end'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='https://www.uwa.edu.au'
                  >
                    Home
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='# '
                    id='navbarDropdown'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                  >
                    Students
                  </a>
                  {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='# '>
                    Help
                  </a>
                </li>
              </ul>
              <form className='d-flex'></form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
