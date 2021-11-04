import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { IconCart } from "./CartWidget";
import logo from "../components/images/logo.jpeg";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
  <Navbar bg="light" expand="lg">
   <Navbar.Brand>passiofina</Navbar.Brand>
    <Link to='/'>
      <img className="logo" src={logo} alt="logo" 
      style={{  height: '115px', width: '120px', borderRadius: '80px', margin: '3px'}}/>
    </Link>
   <Navbar.Toggle aria-controls="navbarScroll" />
   <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
       <Link to='/'>Home</Link>
       <Link to="/categoria/Pijamas">Pijamas</Link>
       <Link to="/categoria/Packs">Packs</Link>
       <Link to="/categoria/Conjuntos">Conjuntos</Link>
       <Link to='/'>Contacto</Link>
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
      <Link to='/cart'>
        <IconCart className="icon"></IconCart>
      </Link>
    </Navbar.Collapse>
  </Navbar>
 )
}

export default NavBar;