import React, { useEffect } from "react";
import { useRef } from "react";
import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Spinner,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useResetPasswordMutation } from "../reduxQuery/APIs/authApi";
import { toast } from "react-toastify";

const ResetPasswordPage = () => {
  const navigation = useNavigate();

  const [resetPassword, { data, isError, isLoading, isSuccess, error }] =
    useResetPasswordMutation();
  const email = useRef(null);
  const password = useRef(null);

  async function hundleClickLogIn(e) {
    e.preventDefault();
    if (window.confirm("Are You Sure You Want To Reset Your Password")) {
      const user = {
        email: email.current.value,
        newPassword: password.current.value,
      };
      await resetPassword(user);
    }
  }
  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("token", data?.token);
      navigation("/login", { replace: true });
    }
  }, [data, isSuccess, navigation]);

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.status === 400
          ? error?.data?.errors[0]?.msg
          : error?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [isError, error]);
  return (
    <Container className="d-flex position-relative flex-column gap-2">
      <h2 className="text-center text-black mb-3">You Are A liar!</h2>
      <h5
        style={{ width: "400px" }}
        className="text-center m-auto mb-4 text-gray"
      >
        so this is a demo reset password without sending code to Email
      </h5>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3 m-auto"
        style={{ width: "400px" }}
      >
        <Form.Control ref={email} type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        className="mb-1 m-auto"
        style={{ width: "400px" }}
        label="Password"
      >
        <Form.Control
          ref={password}
          type="password"
          placeholder="Enter New Password"
        />
      </FloatingLabel>
      <Button
        onClick={(e) => {
          hundleClickLogIn(e);
        }}
        className="m-auto py-2 mt-2 btn-success"
        style={{ width: "400px" }}
      >
        Reset Password
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
      <p
        className="m-auto text-center fs-6 fw-semibold my-2 mb-0 color-main"
        style={{ width: "400px" }}
      >
        Don't forget the new one, liar.
      </p>
    </Container>
  );
};

export default ResetPasswordPage;
