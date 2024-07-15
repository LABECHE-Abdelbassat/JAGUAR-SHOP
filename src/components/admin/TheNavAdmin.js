import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../../images/logo.png";
const TheNavAdmin = ({ modifyShow, setadminsearch, adminsearch }) => {
  const location = useLocation();

  const navigation = useNavigate();
  const search_input = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/admin/products")
      if (adminsearch?.length > -1) {
        search_input.current.value = adminsearch;
      } else {
        search_input.current.value = "";
      }
    else {
      search_input.current.value = "";
    }
  }, [location]);

  async function hundleClickSearchBtn(e) {
    e.preventDefault();
    setadminsearch(search_input.current.value);
    navigation("/admin/products");
  }
  return (
    <div className="nav-bar-admin mb-2">
      <Navbar data-bs-theme="" expand="lg" className="my-2">
        <div className="w-100 d-flex align-items-center jestify-content-between px-3">
          <Form
            style={{ width: "400px", maxWidth: "100%" }}
            className="d-flex me-5 form-search position-relative"
          >
            <Form.Control
              placeholder="Search"
              ref={search_input}
              className="search-input"
              aria-label="Search"
            />
            <button
              onClick={hundleClickSearchBtn}
              className="position-absolute ml-5 btn-search"
            >
              <Icon icon="iconamoon:search" className="icon-search" />
            </button>
          </Form>
          <Nav className="ms-auto d-flex gap-2 my-2 my-lg-0">
            <div onClick={modifyShow} eventKey="2">
              <Icon
                className="nav-burger"
                icon="iconamoon:menu-burger-horizontal-bold"
              />
            </div>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default TheNavAdmin;
