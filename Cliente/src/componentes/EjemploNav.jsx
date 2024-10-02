import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EjemploNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Mi App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to='/Registro'>Registro</Nav.Link>
            <Nav.Link href="#link">Enlace</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Button variant="primary" onClick={handleShow}>
        Abrir Modal
      </Button>

      <Modal show={show} onHide={handleClose}
      backdrop="static"
      keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Título del Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Este es el contenido del modal</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EjemploNav;