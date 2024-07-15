import React, { useEffect, useRef } from "react";
import {
  Button,
  Card,
  CloseButton,
  Col,
  Container,
  Form,
  Spinner,
} from "react-bootstrap";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useUpdateUserPasswordMutation,
} from "../../reduxQuery/APIs/userApi";
import ErrorMessage from "../../components/all/ErrorMessage";
import { Link, useNavigate, useParams } from "react-router-dom";
import SuccessMessage from "../../components/all/SuccessMessage";

const AdminSpecificUserPage = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery(id);
  const [
    deleteUser,
    {
      isError: deleteIsError,
      isLoading: deleteLoading,
      isSuccess: deleteSuccess,
      error: deleteError,
    },
  ] = useDeleteUserMutation();

  async function hundleClickDeleteUser() {
    await deleteUser(id);
  }

  const [
    updateUser,
    {
      isSuccess: updateSuccess,
      isLoading: updateLoading,
      isError: updateIsError,
      error: updateError,
    },
  ] = useUpdateUserMutation();
  const [
    updatePassUser,
    {
      isSuccess: updatePassSuccess,
      isLoading: updatePassLoading,
      isError: updatePassIsError,
      error: updatePassError,
    },
  ] = useUpdateUserPasswordMutation();

  const user_name_input = useRef();
  const user_email_input = useRef();
  const user_phone_input = useRef();
  const user_role_input = useRef();

  const user_pass_input = useRef();
  const user_newpass_input = useRef();
  const user_confirmnewpass_input = useRef();

  useEffect(() => {
    user_name_input.current.value = data?.data?.name || "";
    user_email_input.current.value = data?.data?.email || "";
    user_phone_input.current.value = data?.data?.phone || "";
    user_role_input.current.value = data?.data?.role || "";
  }, [data]);

  async function hundleClickUpdateUser(e) {
    e.preventDefault();
    const userObj = {
      name: user_name_input?.current?.value,
      email: user_email_input?.current?.value,
      phone: user_phone_input?.current?.value,
      role: user_role_input?.current?.value,
    };
    await updateUser({ id: id, user: userObj });
  }
  async function hundleClickUpdatePassUser(e) {
    e.preventDefault();
    const passObj = {
      currentPassword: user_pass_input?.current?.value,
      password: user_newpass_input?.current?.value,
      passwordConfirm: user_confirmnewpass_input?.current?.value,
    };
    await updatePassUser({ id: id, pass: passObj });
  }
  useEffect(() => {
    if (updateSuccess) {
      user_name_input.current.value = "";
      user_email_input.current.value = "";
      user_phone_input.current.value = "";
      user_role_input.current.value = "";
    }
  }, [updateSuccess]);
  useEffect(() => {
    if (updatePassSuccess) {
      user_pass_input.current.value = "";
      user_newpass_input.current.value = "";
      user_confirmnewpass_input.current.value = "";
    }
  }, [updatePassSuccess]);
  useEffect(() => {
    if (deleteSuccess) {
      navigate("/admin/users");
    }
  }, [deleteSuccess]);
  return (
    <Container>
      <div className="position-relative">
        <div style={{ direction: "rtl" }}>
          {isError ? <ErrorMessage error={error} /> : ""}
        </div>
        <div style={{ direction: "rtl" }}>
          {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
        </div>
        <div style={{ direction: "rtl" }}>
          {updateSuccess ? (
            <SuccessMessage message={"Admin Was Updated Successfully"} />
          ) : (
            ""
          )}
          {updateIsError ? <ErrorMessage error={updateError} /> : ""}
        </div>
        <div style={{ direction: "rtl" }}>
          {updatePassSuccess ? (
            <SuccessMessage message={"Admin Password Updated Successfully"} />
          ) : (
            ""
          )}
          {updatePassIsError ? <ErrorMessage error={updatePassError} /> : ""}
        </div>

        <h2 className="color-main fw-semibold">Admin Information</h2>

        <Form>
          <Form.Group className="mt-3" as={Col}>
            <Form.Control
              ref={user_name_input}
              type="text"
              placeholder="Admin Name"
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
              ref={user_role_input}
              type="text"
              placeholder="Role"
              disabled
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
            Update Admin
            {updateLoading ? (
              <Spinner size="sm" className="ms-3"></Spinner>
            ) : (
              ""
            )}
          </Button>
        </Form>
        <Button
          onClick={hundleClickDeleteUser}
          variant="dark"
          className="w-100 mt-3"
        >
          Remove This Admin
          {deleteLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
        <h2 className="color-main fw-semibold mt-3">Change Admin Password</h2>
        <Form>
          <Form.Group className="mt-3" as={Col}>
            <Form.Control
              ref={user_pass_input}
              type="password"
              placeholder="Enter Admin Password"
            />
          </Form.Group>
          <Form.Group className="mt-3" as={Col}>
            <Form.Control
              ref={user_newpass_input}
              type="password"
              placeholder="Enter New Password"
            />
          </Form.Group>
          <Form.Group className="mt-3" as={Col}>
            <Form.Control
              ref={user_confirmnewpass_input}
              type="password"
              placeholder="Confirm New Password"
            />
          </Form.Group>
          <Button
            onClick={hundleClickUpdatePassUser}
            variant="success"
            className="w-100 mt-3"
            type="submit"
          >
            Update Admin Password
            {updatePassLoading ? (
              <Spinner size="sm" className="ms-3"></Spinner>
            ) : (
              ""
            )}
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AdminSpecificUserPage;
