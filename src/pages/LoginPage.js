import React, { useEffect } from "react";
import { useRef } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Spinner,
  Toast,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/actions/authAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../reduxQuery/APIs/authApi";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import ErrorMessage from "../components/all/ErrorMessage";
import SuccessMessage from "../components/all/SuccessMessage";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const [login, { data, isError, isLoading, isSuccess, error }] =
    useLogInMutation();
  const email = useRef(null);
  const password = useRef(null);

  async function hundleClickLogIn(e) {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    await login(user);
  }
  async function hundleClickLogInAsDemo(e) {
    e.preventDefault();
    const user = {
      email: "user1@gmail.com",
      password: "demopass123",
    };
    await login(user);
  }

  useEffect(() => {
    localStorage.setItem("token", data?.token);
    localStorage.setItem("role", data?.data?.role);
    if (isSuccess) {
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
    <Container className="d-flex position-relative flex-column gap-2">
      <ToastContainer />

      <h3 className="text-center text-black mb-3">Welcome Back</h3>
      <h6 className="text-center mb-4 text-gray">
        please login to your account
      </h6>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 m-auto"
        style={{ width: "400px", maxWidth: "100%" }}
      >
        <Form.Control ref={email} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        className="mb-1 m-auto"
        style={{ width: "400px", maxWidth: "100%" }}
        label="Password"
      >
        <Form.Control ref={password} type="password" placeholder="Password" />
      </FloatingLabel>
      <Link
        to={"/reset-password"}
        className="m-auto text-end"
        style={{ width: "400px", maxWidth: "100%", textDecoration: "none" }}
      >
        Forget Password?
      </Link>
      <Button
        onClick={(e) => {
          hundleClickLogIn(e);
        }}
        className="m-auto py-2 mt-2 btn-success"
        style={{ width: "400px", maxWidth: "100%" }}
      >
        Log In
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
      <Button
        onClick={(e) => {
          hundleClickLogInAsDemo(e);
        }}
        className="m-auto py-2 mt-2 btn-dark"
        style={{ width: "400px", maxWidth: "100%" }}
      >
        Log In As DEMO
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
      <p
        className="m-auto text-center fs-6 fw-semibold my-2 mb-0 color-main"
        style={{ width: "400px", maxWidth: "100%" }}
      >
        You Don't Have An Account
      </p>
      <Link
        style={{ width: "400px", maxWidth: "100%" }}
        className="m-auto mt-2"
        to={"/sign-up"}
      >
        <Button className="m-auto w-100 py-2 mt-2 btn-dark">Sign Up</Button>
      </Link>
    </Container>
  );
};

export default LoginPage;
