import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pageNotFoundImage from "../images/page_not_found.png";
const NotFoundPage = () => {
  const role = localStorage.getItem("role");
  return (
    <Container
      className="text-center"
      style={{ marginTop: "50px", marginBottom: "100px" }}
    >
      <Row>
        <Col>
          <div className="main-color w-100 fw-semibold p-md-5 pt-0 mt-0 px-sm-0  fs-4  text-center ">
            <img
              src={pageNotFoundImage}
              className="img-fluid p-sm-0 px-md-5 pb-md-0 text-center w-50 "
              alt="No Item Found"
            />
            <div className="main-color  fw-semibold   fs-2 mt-3 text-center">
              Page Not Found
            </div>
          </div>
          <p>Sorry, the page you are looking for does not exist.</p>
          {role === "admin" ? (
            <Button variant="success" as={Link} to="/admin/products">
              Go to Dashboard
            </Button>
          ) : (
            <Button variant="success" className="mb-4" as={Link} to="/">
              Go to Home
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
