import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>
     <Navbar className="bg-body-tertiary p-3">
        <Container>
          <Navbar.Brand href="#home" className='' style={{fontSize:"28px"}}>
          <i className="fa-solid fa-address-card fa-xl me-3" style={{color: "#B197FC",}} />
           ContactKeeper
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Header