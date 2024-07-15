import React, { useRef, useState } from "react";
import TheNav from "../components/all/TheNav";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import Footer from "../components/all/Footer";
import { Navbar, Nav, Form } from "react-bootstrap";
import {
  FaHome,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Icon } from "@iconify/react/dist/iconify.js";

const RootPage = () => {
  const [showSearch, setShowSearch] = useState(false);
  const search_input = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  async function handleClickSearchBtn(e) {
    e.preventDefault();
    navigate(`/result-page/${search_input.current.value.split(" ").join("+")}`);
    setShowSearch(false);

    localStorage.removeItem("category");
    localStorage.removeItem("brand");
  }

  return (
    <div>
      <TheNav />
      <div style={{ minHeight: "calc(100vh - 655px)" }}>
        <Outlet />
      </div>
      <Footer />
      <div className="bottom-nav">
        <Navbar fixed="bottom" className="bottom-nav-bar">
          {showSearch && (
            <Form className="d-flex w-100 mx-5 form-search bottom-nav-search">
              <Form.Control
                placeholder="Search"
                ref={search_input}
                className="search-input"
                aria-label="Search"
              />
              <button
                onClick={handleClickSearchBtn}
                className="position-absolute ml-5 btn-search"
              >
                <Icon icon="iconamoon:search" className="icon-search" />
              </button>
            </Form>
          )}
          <Nav className="bottom-nav-icons">
            <Link
              to="/"
              onClick={() => setShowSearch(false)}
              className={`bottom-nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <FaHome size={24} className="mb-2" />
              <span>Home</span>
            </Link>
            <Link
              to="/wishlist"
              onClick={() => setShowSearch(false)}
              className={`bottom-nav-item ${
                location.pathname === "/wishlist" ? "active" : ""
              }`}
            >
              <FaHeart size={24} className="mb-2" />
              <span>Wishlist</span>
            </Link>
            <Link
              to="/cart"
              onClick={() => setShowSearch(false)}
              className={`bottom-nav-item ${
                location.pathname === "/cart" ? "active" : ""
              }`}
            >
              <FaShoppingCart size={24} className="mb-2" />
              <span>Cart</span>
            </Link>
            <div
              onClick={() => setShowSearch(!showSearch)}
              className={`bottom-nav-item ${
                location.pathname.startsWith("/result-page") ? "active" : ""
              }`}
            >
              <FaSearch size={24} className="mb-2" />
              <span>Search</span>
            </div>
            <Link
              to="/user/profile"
              onClick={() => setShowSearch(false)}
              className={`bottom-nav-item ${
                location.pathname.startsWith("/user") ? "active" : ""
              }`}
            >
              <FaUser size={24} className="mb-2" />
              <span>Account</span>
            </Link>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default RootPage;
