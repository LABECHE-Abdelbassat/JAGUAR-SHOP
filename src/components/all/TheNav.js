import React from 'react';
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TheNav = () => {
  return (
    <div className='nav-bar'>
  
    <div style={{fontSize : "10px"}} className='bg-success text-light text-center py-1'>Free Shipping To Us . up to 50$</div>
    <Navbar data-bs-theme="" expand="lg" className="my-2">
      <Container className='px-5'>
        <Navbar.Brand className='m-auto' href="/"><img className='img-fluid mx-2 px-1 logo-img' src='logo.png'></img></Navbar.Brand>
        <Navbar.Collapse>
          
          <Form className="d-flex w-100 mx-5 form-search position-relative">
            <Form.Control
              placeholder="Search"
              className="search-input"
              aria-label="Search"
            />
            <button className="position-absolute ml-5 btn btn-search">
            <Icon icon="iconamoon:search" className='icon-search' />
            </button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
          >
            <Nav.Link eventKey="2"><Icon icon="iconamoon:heart-light" className='nav-icon' /> </Nav.Link>
            <Nav.Link eventKey="3"><Icon icon="iconamoon:shopping-bag-light" className='nav-icon'/> </Nav.Link>
            <Nav.Link eventKey="3"><Icon icon="iconamoon:profile-light" className='nav-icon'/></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default TheNav