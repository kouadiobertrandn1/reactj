
import React from 'react';
import { Navbar, Container, Nav,  } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

function App  () {
  return (
      <>
        <div className="App"> 
    
   
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
          <Navbar.Brand href="#home"> Navbar</Navbar.Brand>
            <Nav.Link href="#A propos">A propos</Nav.Link>
            <Nav.Link href="#Menu">Menu</Nav.Link>
            <Nav.Link href="#Contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
      </div>
    </>
    );
    }

export default App;








