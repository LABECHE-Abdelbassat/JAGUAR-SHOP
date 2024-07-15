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
} from "../../reduxQuery/APIs/userApi";
import ErrorMessage from "../../components/all/ErrorMessage";
import { Link } from "react-router-dom";
import SuccessMessage from "../../components/all/SuccessMessage";

const AdminManageUsersPage = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetAllUsersQuery();
  const [
    deleteUser,
    { isError: deleteIsError, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteUserMutation();

  async function hundleClickDeleteUser(id) {
    await deleteUser(id);
  }

  // const [addCoupon , {isLoading , isError , isSuccess , error}] = useCreateCouponMutation();
  // const {data ,isError:listIsError,error:listError, isLoading:listLoading} = useGetAllCouponsQuery();
  const [
    addUser,
    {
      isSuccess: addSuccess,
      isLoading: addLoading,
      isError: addIsError,
      error: addError,
    },
  ] = useCreateUserMutation();

  const user_name_input = useRef();
  const user_email_input = useRef();
  const user_password_input = useRef();
  const user_passwordConfirm_input = useRef();
  const user_phone_input = useRef();

  async function hundleClickAddUser(e) {
    e.preventDefault();
    const userObj = {
      name: user_name_input.current.value,
      email: user_email_input.current.value,
      password: user_password_input.current.value,
      passwordConfirm: user_passwordConfirm_input.current.value,
      phone: user_phone_input.current.value,
      role: "admin",
    };
    await addUser(userObj);
  }
  useEffect(() => {
    if (addSuccess) {
      user_name_input.current.value = "";
      user_email_input.current.value = "";
      user_password_input.current.value = "";
      user_passwordConfirm_input.current.value = "";
      user_phone_input.current.value = "";
    }
  }, [addSuccess]);
  return (
    <Container>
      <div className="position-relative">
        <div style={{ direction: "rtl" }}>
          {isError ? <ErrorMessage error={error} /> : ""}
        </div>
        <div style={{ direction: "rtl" }}>
          {deleteSuccess ? (
            <SuccessMessage message={"Admin Was Deleted Successfully"} />
          ) : (
            ""
          )}
          {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
        </div>
        <div style={{ direction: "rtl" }}>
          {addSuccess ? (
            <SuccessMessage message={"Admin Was Added Successfully"} />
          ) : (
            ""
          )}
          {addIsError ? <ErrorMessage error={addError} /> : ""}
        </div>

        <h2 className="color-main fw-semibold">Add New Admin</h2>

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
              ref={user_phone_input}
              type="phone"
              placeholder="Phone"
            />
          </Form.Group>
          <Form.Group className="mt-3" as={Col}>
            <Form.Control
              ref={user_password_input}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="my-3" as={Col}>
            <Form.Control
              ref={user_passwordConfirm_input}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Group>
          <Button
            onClick={hundleClickAddUser}
            variant="success"
            className="w-100"
            type="submit"
          >
            Add Admin
            {addLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
          </Button>
        </Form>
        <h2 className="mt-3 color-main fw-semibold">All Users</h2>
        {isLoading ? (
          <div className="text-center">
            <Spinner
              size="lg"
              variant="success"
              className="mt-4 align-self-center"
            ></Spinner>
          </div>
        ) : (
          <div>
            {data?.data?.map((item, index) => {
              if (item?.role === "user") {
                return null;
              }
              return (
                <Link
                  key={index}
                  to={`/admin/users/${item._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card className="mt-3">
                    <Card.Body>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <strong>User Name : </strong>
                          {item?.name}
                        </div>
                      </div>
                      <div className="mt-3">
                        <strong>Email : </strong>
                        {item?.email}
                      </div>
                      <div className="d-flex mt-3 justify-content-between">
                        <div>
                          <strong>Role : </strong>
                          {item?.role}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AdminManageUsersPage;
