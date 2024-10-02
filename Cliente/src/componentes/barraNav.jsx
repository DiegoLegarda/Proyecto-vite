//barra de navegacion en el proyecto
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';



function BarraNavegacion() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/Registro'>Registro</Nav.Link>
            <Nav.Link as={Link} to='/Acerca'>Acerca de</Nav.Link>
            <Nav.Link as={Link} to='/Herramientas'>Herramientas</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default BarraNavegacion;
