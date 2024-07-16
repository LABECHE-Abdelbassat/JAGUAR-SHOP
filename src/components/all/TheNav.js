import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import logo from "../../images/logo.png";
import { useGetLoggedUserQuery } from "../../reduxQuery/APIs/loggedUserApi";
const TheNav = () => {
  const search_input = useRef();

  const navigation = useNavigate();
  const { data } = useGetLoggedUserQuery();

  async function hundleClickSearchBtn(e) {
    e.preventDefault();
    navigation(
      `/result-page/${search_input.current.value.split(" ").join("+")}`
    );
    localStorage.removeItem("category");
    localStorage.removeItem("brand");
  }

  return (
    <div className="nav-bar">
      <div
        style={{ fontSize: "10px" }}
        className="bg-success text-light text-center py-1"
      >
        Enjoy the FREE SHIPPING Offer
      </div>
      {localStorage.getItem("role") !== "user" ? (
        <Navbar data-bs-theme="" expand="lg" className="my-2">
          <Container className="px-5 pb-0">
            <Link
              to={"/"}
              className="m-auto"
              style={{ textDecoration: "none" }}
            >
              <Navbar.Brand className="m-auto fw-bold">
                <img
                  className="img-fluid mx-2 px-1 logo-img text-success"
                  alt="Jaguar"
                  src={logo}
                ></img>
              </Navbar.Brand>
            </Link>
            <Navbar.Collapse>
              <Form className="d-flex w-100 mx-5 form-search position-relative">
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
              <Nav className="me-auto d-flex gap-2 my-2 my-lg-0">
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                  <div
                    className="d-flex  p-1 px-2 rounded-2 align-items-center gap-2"
                    eventkey="3"
                  >
                    <div
                      className="text-success align-bottom fw-semibold d-flex align-items-center"
                      style={{ height: "30px" }}
                    >
                      Login
                    </div>
                  </div>
                </Link>
                <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
                  <div
                    className="d-flex border border-success border-1 p-1 px-2 rounded-2 align-items-center gap-2"
                    eventkey="3"
                  >
                    <div
                      className="text-success fw-semibold d-flex align-items-center"
                      style={{ textWrap: "nowrap", height: "30px" }}
                    >
                      Sing Up
                    </div>
                  </div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar data-bs-theme="" expand="lg" className="my-2">
          <Container className="px-5 pb-0">
            <Link
              to={"/"}
              className="m-auto"
              style={{ textDecoration: "none" }}
            >
              <Navbar.Brand className="m-auto fw-bold text-success">
                <img
                  className="img-fluid mx-2 px-1 logo-img"
                  alt="Jaguar"
                  src={logo}
                ></img>
              </Navbar.Brand>
            </Link>
            <Navbar.Collapse>
              <Form className="d-flex w-100 mx-5 form-search position-relative">
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
              <Nav className="me-auto d-flex gap-2 my-2 my-lg-0">
                <Link to={"/wishlist"} style={{ textDecoration: "none" }}>
                  <div eventkey="2">
                    <Icon icon="iconamoon:heart-light" className="nav-icon" />
                  </div>
                </Link>
                <Link to={"/cart"} style={{ textDecoration: "none" }}>
                  <div eventkey="3">
                    <Icon
                      icon="iconamoon:shopping-bag-light"
                      className="nav-icon"
                    />{" "}
                  </div>
                </Link>
                <Link to={"/user/profile"} style={{ textDecoration: "none" }}>
                  <div eventkey="3">
                    <Icon icon="iconamoon:profile-light" className="nav-icon" />
                  </div>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default TheNav;
