import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Logo from '../Assets/logo.png'


function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Quiz.it
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header