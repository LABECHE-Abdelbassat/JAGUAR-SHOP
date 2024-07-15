import React, { useEffect, useRef, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {
  useDeleteLoggedUserMutation,
  useGetLoggedUserQuery,
  useUpdateLoggedUserMutation,
  useUpdateLoggedUserPasswordMutation,
} from "../../reduxQuery/APIs/loggedUserApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Profile = () => {
  const navigation = useNavigate();
  const [validated, setValidated] = useState(false);

  const pass_input = useRef();
  const new_pass_input = useRef();
  const confirm_new_pass_input = useRef();

  const user_name_input = useRef();
  const user_email_input = useRef();
  const user_phone_input = useRef();

  const { data, isLoading, isError, isSuccess, error } =
    useGetLoggedUserQuery();
  console.log(data);
  const [
    updatePassword,
    {
      isSuccess: passSuccess,
      isLoading: passLoading,
      isError: passIsError,
      error: passError,
    },
  ] = useUpdateLoggedUserPasswordMutation();
  const [
    updateUser,
    {
      isSuccess: updateSuccess,
      isLoading: updateLoading,
      isError: updateIsError,
      error: updateError,
    },
  ] = useUpdateLoggedUserMutation();
  const [
    deleteAccount,
    {
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      isError: deleteIsError,
      error: deleteError,
    },
  ] = useDeleteLoggedUserMutation();

  useEffect(() => {
    user_name_input.current.value = data?.data?.name || "";
    user_email_input.current.value = data?.data?.email || "";
    user_phone_input.current.value = data?.data?.phone || "";
  }, [data]);

  async function hundleClickUpdateUser(e) {
    e.preventDefault();
    const userObj = {
      name: user_name_input?.current?.value,
      prev: data?.data?.email,
      email: user_email_input?.current?.value,
      phone: user_phone_input?.current?.value,
    };
    await updateUser(userObj);
  }

  async function hundleClickSavePassword(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return setValidated(true);
    }

    setValidated(true);
    const passObj = {
      currentPassword: pass_input.current.value,
      password: new_pass_input.current.value,
      passwordConfirm: confirm_new_pass_input.current.value,
    };
    await updatePassword(passObj);
  }

  async function hundleClickDeleteAccount() {
    await deleteAccount();
  }
  useEffect(() => {
    if (updateSuccess) {
      user_name_input.current.value = "";
      user_email_input.current.value = "";
      user_phone_input.current.value = "";
    }
  }, [updateSuccess]);
  useEffect(() => {
    if (passSuccess) {
      navigation("/login", {
        replace: true,
        state: {
          message: "Password Updated Successfully , Please Log In Again",
        },
      });
    }
  }, [passSuccess]);
  useEffect(() => {
    if (deleteSuccess) {
      localStorage.removeItem("token");
      navigation("/login", {
        replace: true,
        state: { message: "Log Out Success" },
      });
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (deleteIsError) {
      toast.error(
        deleteError?.status === 400
          ? deleteError?.data?.errors[0]?.msg
          : deleteError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [deleteIsError, deleteError]);

  useEffect(() => {
    if (passIsError) {
      toast.error(
        passError?.status === 400
          ? passError?.data?.errors[0]?.msg
          : passError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [passIsError, passError]);

  useEffect(() => {
    if (updateIsError) {
      toast.error(
        updateError?.status === 400
          ? updateError?.data?.errors[0]?.msg
          : updateError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [updateIsError, updateError]);

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
  useEffect(() => {
    if (updateSuccess) {
      toast.success("Your Information Has Updated Successfully", {
        delay: 50,
        autoClose: 2000,
      });
    }
  }, [updateSuccess]);

  return (
    <div>
      <ToastContainer />

      <h2 className="color-main fw-semibold">Profile</h2>
      <Form>
        <Form.Group className="mt-3" as={Col}>
          <Form.Control
            ref={user_name_input}
            type="text"
            placeholder="User Name"
          />
        </Form.Group>
        <Form.Group className="mt-3" as={Col}>
          <Form.Control
            ref={user_email_input}
            type="text"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mt-3" as={Col}>
          <Form.Control
            ref={user_phone_input}
            type="phone"
            placeholder="Phone"
          />
        </Form.Group>
        <Button
          onClick={hundleClickUpdateUser}
          variant="success"
          className="w-100 mt-3"
          type="submit"
        >
          Update User
          {updateLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </Form>
      <h2 className="mt-3 color-main fw-semibold">Change Password</h2>
      <Form noValidate validated={validated} onSubmit={hundleClickSavePassword}>
        <Form.Group className="mt-3" as={Col} controlId="validationCustom01">
          <Form.Control
            required
            ref={pass_input}
            type="password"
            placeholder="Enter your password"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3" as={Col} controlId="validationCustom02">
          <Form.Control
            required
            ref={new_pass_input}
            type="password"
            placeholder="Enter the new password"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter The New Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group
          className="mt-3 mb-3"
          as={Col}
          controlId="validationCustom03"
        >
          <Form.Control
            required
            ref={confirm_new_pass_input}
            type="password"
            placeholder="Confirm the new password"
          />
          <Form.Control.Feedback type="invalid">
            Please Confirm The New Password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" className="w-100" type="submit">
          Save Password
          {passLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </Form>
      <Button
        onClick={hundleClickDeleteAccount}
        variant="dark"
        className="w-100 mt-3"
      >
        Log Out
        {deleteLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
    </div>
  );
};

export default Profile;
