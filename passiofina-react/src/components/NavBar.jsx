import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


export const NavBar = () => {
    return (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">passiofina</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Tienda</Nav.Link>
        <Nav.Link href="#action3">Contacto</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="escribe aquí"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-danger">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
 )
}