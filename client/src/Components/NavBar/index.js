import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import './index.css'

const NavBar = () => {
  return (
    <header>
      <Container fluid className='p-0'>
        <Navbar className='navbar' expand='lg' variant='light' bg='light'>
          <Container fluid>
            <Navbar className='navbar' variant='light' bg='light'>
              <Container>
                <Navbar.Brand href='https://www.uwa.edu.au'>
                  <Image
                    src='https://www.uwa.edu.au/Assets/Foundation/Assets/img/UWA-logo-dark.svg'
                    width='200'
                    height='50'
                    alt='UWA Logo'
                    fluid
                  />
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar.Toggle
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse
              className='justify-content-end'
              id='navbarSupportedContent'
            >
              <Nav className='nav justify-content-end'>
                <Nav.Item>
                  <Nav.Link
                    className='nav-link'
                    active
                    href='https://www.uwa.edu.au'
                    aria-current='page'
                  >
                    Home
                  </Nav.Link>
                </Nav.Item>
                <NavDropdown
                  title='Students'
                  id='navbarDropdown'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  aria-labelledby='navbarDropdown'
                >
                  <NavDropdown.Item
                    className='nav-link'
                    href='https://www.uwa.edu.au/study/'
                  >
                    Future Students
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className='nav-link'
                    href='https://www.uwa.edu.au/study/International-students'
                  >
                    International Students
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link className='nav-link' href='# '>
                    Help
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <form className='d-flex'></form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  )
}

export default NavBar
