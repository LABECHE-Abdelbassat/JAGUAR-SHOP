import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

const TheNav = () => {
  const token = localStorage.getItem("token")
  const location = useLocation();
  const keyword = useParams().keyword;

  const navigation = useNavigate();
  const search_input = useRef();
  useEffect(() => {
    if(location.pathname.startsWith("/result-page"))
      if(location.pathname.split('/').length > 2) {
        search_input.current.value = location.pathname.split('/')[2]?.split('+').join(' ');
      }else{
        search_input.current.value = ""
      }
    else{
      search_input.current.value=""
    }
  }, [keyword,location])

  
  
  
  async function hundleClickSearchBtn(e){
    e.preventDefault();
    navigation(`/result-page/${search_input.current.value.split(" ").join("+")}`);
    localStorage.removeItem("category")
    localStorage.removeItem("brand")
  }

  return (
    <div className='nav-bar'>
  
    <div style={{fontSize : "10px"}} className='bg-success text-light text-center py-1'>Free Shipping To Us . up to 50$</div>
    {token==null? 
    <Navbar data-bs-theme="" expand="lg" className="my-2">
      <Container className='px-5'>
        <Link to={"/"} style={{textDecoration:"none"}}>
        <Navbar.Brand className='m-auto'><img className='img-fluid mx-2 px-1 logo-img' src='logo.png'></img></Navbar.Brand>
        </Link>
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
            <Nav.Link eventKey="3"><Icon icon="iconamoon:shopping-bag-light" className='nav-icon'/> </Nav.Link>
            <Nav.Link eventKey="3"><Icon icon="iconamoon:profile-light" className='nav-icon'/></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>:
    <Navbar data-bs-theme="" expand="lg" className="my-2">
      <Container className='px-5'>
      <Link to={"/"} className='m-auto' style={{textDecoration:"none"}}>
        <Navbar.Brand className='m-auto'><img className='img-fluid mx-2 px-1 logo-img' src='logo.png'></img></Navbar.Brand>
        </Link>
        <Navbar.Collapse>
          
          <Form className="d-flex w-100 mx-5 form-search position-relative">
            <Form.Control
              placeholder="Search"
              ref={search_input}
              className="search-input"
              aria-label="Search"
            />
            <button onClick={hundleClickSearchBtn} className="position-absolute ml-5 btn-search">
            <Icon icon="iconamoon:search" className='icon-search' />
            </button>
          </Form>
          <Nav
            className="me-auto d-flex gap-2 my-2 my-lg-0"
          >
            <Link to={"/wishlist"} style={{textDecoration:"none"}}>
              <div eventKey="2"><Icon icon="iconamoon:heart-light" className='nav-icon' /></div>
            </Link>
            <Link to={"/cart"} style={{textDecoration:"none"}}>
            <div eventKey="3"><Icon icon="iconamoon:shopping-bag-light" className='nav-icon'/> </div>

            </Link>
            <Link to={"/user/profile"} style={{textDecoration:"none"}}>
            <div eventKey="3"><Icon icon="iconamoon:profile-light" className='nav-icon'/></div>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>}


    </div>
  )
}

export default TheNav