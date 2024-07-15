import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/whitelogo.png";

const Footer = () => {
  return (
    <footer className="bg-success text-light pt-4 pb-0 mb-sm-5 mb-lg-0">
      <Container>
        <Row className="mb-3">
          <Col xs={12} sm={6} md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/result-page" className="text-light">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-light">
                  Blog
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/help-center" className="text-light">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping-delivery" className="text-light">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns-refunds" className="text-light">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-light">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-light">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" className="text-light">
                  Payment Methods
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Legal Information</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/terms-of-service" className="text-light">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-light">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h5>Contact Information</h5>
            <p>1234 Street Name, City, State 56789</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: support@example.com</p>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" md={3}>
            <h5>Follow Us</h5>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-2"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <FaPinterest size={24} />
            </a>
          </Col>
          <Col className="mb-3" md={3}>
            <h5>We Accept</h5>
            <FaCcVisa size={31} className="me-2 align-top" />
            <FaCcMastercard size={31} className="me-2 align-top" />
            <FaCcPaypal size={31} className="align-top" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <img src={logo} alt="Logo" className="my-4" />
            <p>&copy; 2023 Techno-Kai. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
