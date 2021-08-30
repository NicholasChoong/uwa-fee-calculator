import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../assets/images/UWA-logo-dark.svg'

const NavBar = () => {
  return (
    <header>
      <Container fluid className='p-0'>
        <Navbar expand='lg' variant='light' bg='light'>
          <Container fluid>
            <Navbar variant='light' bg='light'>
              <Container>
                <Navbar.Brand href='https://www.uwa.edu.au'>
                  <Image
                    src={logo}
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
              <Nav className='justify-content-end'>
                <Nav.Item>
                  <Nav.Link
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
                  <NavDropdown.Item href='https://www.uwa.edu.au/study/'>
                    Future Students
                  </NavDropdown.Item>
                  <NavDropdown.Item href='https://www.uwa.edu.au/study/International-students'>
                    International Students
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                  <Nav.Link href='# '>Help</Nav.Link>
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
