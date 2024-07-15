import React, { useEffect, useRef } from "react";
import { Button, Col, Card, Form, CloseButton, Spinner } from "react-bootstrap";
import {
  useCreateCouponMutation,
  useDeleteCouponMutation,
  useGetAllCouponsQuery,
} from "../../reduxQuery/APIs/couponApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";

const AdminCoupon = () => {
  const [addCoupon, { isLoading, isError, isSuccess, error }] =
    useCreateCouponMutation();
  const {
    data,
    isError: listIsError,
    error: listError,
    isLoading: listLoading,
  } = useGetAllCouponsQuery();
  const [
    deleteCoupon,
    { isSuccess: deleteSuccess, isError: deleteIsError, error: deleteError },
  ] = useDeleteCouponMutation();

  const coupon_name_input = useRef();
  const coupon_end_data_input = useRef();
  const coupon_discount_input = useRef();

  async function hundleClickAddCoupon(e) {
    e.preventDefault();
    const couponObj = {
      name: coupon_name_input.current.value,
      expire: coupon_end_data_input.current.value,
      discount: coupon_discount_input.current.value,
    };
    await addCoupon(couponObj);
  }
  useEffect(() => {
    if (isSuccess) {
      coupon_name_input.current.value = "";
      coupon_end_data_input.current.value = "";
      coupon_discount_input.current.value = "";
    }
  }, [isSuccess]);
  async function hundleClickDeleteCoupon(id) {
    await deleteCoupon(id);
  }

  return (
    <div className="position-relative">
      <div style={{ direction: "rtl" }}>
        {isSuccess ? (
          <SuccessMessage message={"Coupon Created Successfully"} />
        ) : (
          ""
        )}
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <div style={{ direction: "rtl" }}>
        {deleteSuccess ? (
          <SuccessMessage message={"Coupon Deleted Successfully"} />
        ) : (
          ""
        )}
        {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
      </div>
      <div style={{ direction: "rtl" }}>
        {listIsError ? <ErrorMessage error={listError} /> : ""}
      </div>
      <h2 className="color-main fw-semibold">Add New Coupon</h2>
      <Form>
        <Form.Group className="mt-3" as={Col} controlId="formGridPassword">
          <Form.Control
            ref={coupon_name_input}
            type="text"
            placeholder="Coupon name"
          />
        </Form.Group>
        <Form.Group className="mt-3" as={Col} controlId="formGridPassword">
          <Form.Control
            ref={coupon_end_data_input}
            type="date"
            placeholder="06/11/2024"
          />
        </Form.Group>
        <Form.Group className="mt-3 mb-3" as={Col} controlId="formGridPassword">
          <Form.Control
            ref={coupon_discount_input}
            type="number"
            placeholder="% discount"
          />
        </Form.Group>
        <Button
          onClick={hundleClickAddCoupon}
          variant="success"
          className="w-100"
          type="submit"
        >
          Add Coupon
          {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </Button>
      </Form>
      <h2 className="mt-3 color-main fw-semibold">All Coupons</h2>

      {listLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : data?.data?.length < 1 ? (
        <div className="text-main text-center m-0 p-0 fs-5">
          NO COUPON FOUND
        </div>
      ) : (
        <div>
          {data?.data.map((item, index) => {
            return (
              <Card key={index} className="mt-3">
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <strong>Coupon Name : </strong>
                    {item.name}
                  </div>
                  <CloseButton
                    onClick={() => hundleClickDeleteCoupon(item._id)}
                  ></CloseButton>
                </Card.Body>
                <Card.Body>
                  <strong>Expire Date : </strong>
                  {item.expire.slice(0, 10)}
                </Card.Body>
                <Card.Body>
                  <strong>Discount : </strong>
                  {item.discount}%
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminCoupon;
