import React from 'react'
import logo from '../../assets/images/UWA-logo-dark.svg'

const NavBar = () => {
  return (
    <header>
      <div className='p-0 container-fluid'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <div className='container-fluid'>
            <nav className='navbar navbar-light'>
              <div className='container'>
                <a className='navbar-brand' href='https://www.uwa.edu.au'>
                  <img src={logo} width='200' height='50' alt='UWA Logo' />
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
                  {/* <a
                    className='btn btn-primary-outline nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  > */}
                  <button
                    className='btn btn-primary-outline nav-link dropdown-toggle'
                    type='button'
                    id='navbarDropdown'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Students
                  </button>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.uwa.edu.au/study/'
                      >
                        Future Students
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        href='https://www.uwa.edu.au/study/International-students'
                      >
                        International Students
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='# '>
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
