import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
       <Navbar.Brand to="/">
          <Link to="/">
            EVENTOS
          </Link>
       </Navbar.Brand>
       <Nav className="mr-auto">
         <Nav.Link to="/">
          <Link to="/">
              Home
           </Link>
         </Nav.Link>
         <Nav.Link>
           <Link to="/inscripcion">
              Inscripcion
           </Link>
         </Nav.Link>
         <Nav.Link>
           <Link to="/login">
              Iniciar
           </Link>
         </Nav.Link>
       </Nav>
    </Navbar>
  );
};

export default Header;