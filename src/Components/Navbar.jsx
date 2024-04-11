import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
  return (
    <>
       <div className='nav'>
       <div className="title">
        <span className='name'>Bistro</span>
        <span  className='second'>Bites.</span> 
        {/* <span  className='name'>Bites.</span>  */}
        
       </div>
       <div className="others">
            <span>Menus</span>
            <span>Ambiance</span>
            <span>Locations</span>
            <span>Reservations</span>
       </div>
       {/* <Navbar >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

       </div>

    </>
  )
}

export default Navbar1