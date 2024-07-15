import React, { useEffect } from "react";
import { useRef } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../redux/actions/authAction";
import { useSignUpMutation } from "../reduxQuery/APIs/authApi";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import signUpImage from "../images/sign_up.png";

const SignUpPage = () => {
  const navigation = useNavigate();
  const [signUp, { data, isError, isLoading, isSuccess, error }] =
    useSignUpMutation();

  const username = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  async function hundleClickSingUp(e) {
    const user = {
      name: username.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordConfirm: confirmPassword.current.value,
      phone: phone.current.value,
    };
    await signUp(user);
  }

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data?.token);
      localStorage.setItem("role", data?.data?.role);

      if (data?.token.length > 5) {
        switch (data?.data?.role) {
          case "admin":
            navigation("/admin/products", { replace: true });
            break;
          case "user":
            navigation("/", { replace: true });
            break;

          default:
            navigation("/", { replace: true });
            break;
        }
      }
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (isError) {
      if (error?.status === 400) {
        toast.warning(error?.data?.errors[0]?.msg, {
          delay: 50,
          autoClose: 2000,
        });
      } else {
        toast.error(error?.data?.message || "Network Error!", {
          delay: 50,
          autoClose: 2000,
        });
      }
    }
  }, [isError, error]);
  return (
    <Container className="d-flex mt-3 position-relative flex-column gap-2">
      <ToastContainer />
      <h3 className="text-center text-black ">Hi There , Welcome</h3>

      <h6 className="   text-center mb-4 text-gray">
        please Enter Your Information to sing up
      </h6>
      <Row>
        <Col
          className="d-flex flex-column  align-items-center justify-content-top mb-5 mb-md-0"
          md={6}
        >
          <img alt="Login" src={signUpImage} style={{ width: "90%" }} />
        </Col>
        <Col
          md={6}
          style={{ marginTop: "2px" }}
          className="d-flex position-relative align-items-center justify-content-top flex-column gap-2"
        >
          <FloatingLabel
            controlId="floatingInput"
            label="User Name"
            className="mb-3 mx-auto"
            style={{ width: "450px", maxWidth: "90%" }}
          >
            <Form.Control ref={username} type="text" placeholder="Jone Smith" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 mx-auto"
            style={{ width: "450px", maxWidth: "90%" }}
          >
            <Form.Control
              ref={email}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Phone Number"
            className="mb-3 mx-auto"
            style={{ width: "450px", maxWidth: "90%" }}
          >
            <Form.Control ref={phone} type="phone" placeholder="0627502458" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            className="mb-3 mx-auto"
            style={{ width: "450px", maxWidth: "90%" }}
            label="Password"
          >
            <Form.Control
              ref={password}
              type="password"
              placeholder="Password"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            className="mb-1 mx-auto"
            style={{ width: "450px", maxWidth: "90%" }}
            label="Confirm Password"
          >
            <Form.Control
              ref={confirmPassword}
              type="password"
              placeholder="Confirm Password"
            />
          </FloatingLabel>
          <Button
            onClick={hundleClickSingUp}
            className="m-auto py-2 mt-2 btn-success"
            style={{ width: "450px", maxWidth: "90%" }}
          >
            Sign Up
            {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
          </Button>
          <p
            className="m-auto text-center fs-6 fw-meduim my-2 mb-0"
            style={{ width: "450px", maxWidth: "90%" }}
          >
            You Have An Account{" "}
            <Link
              style={{ textDecoration: "none" }}
              className=" text-black fw-bold"
              to={"/login"}
            >
              Log In
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
