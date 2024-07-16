import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  useApplyCouponToCartMutation,
  useClearUserCartMutation,
} from "../../reduxQuery/APIs/cartApi";
import { useNavigate } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import CheckOutModel from "./CheckOutModel";
import { toast } from "react-toastify";

const Summary = ({ data }) => {
  const coupon_input = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [clearCart, { isLoading, isError, isSuccess, error }] =
    useClearUserCartMutation();
  const [
    applyCoupon,
    {
      isLoading: couponLoading,
      isError: couponIsError,
      isSuccess: couponIsSuccess,
      error: couponError,
    },
  ] = useApplyCouponToCartMutation();
  const navigation = useNavigate();
  async function hundleClickClearCart() {
    await clearCart();
  }
  useEffect(() => {
    if (isSuccess) {
      navigation("/", { replace: true });
    }
  }, [isSuccess, navigation]);
  function hundleClickHide() {
    setModalShow(false);
  }
  async function hundleClickApplyCoupon() {
    const couponObj = {
      coupon: coupon_input.current.value,
    };
    await applyCoupon(couponObj);
  }

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
    if (couponIsError) {
      toast.error(
        couponError?.status === 400
          ? couponError?.data?.errors[0]?.msg
          : couponError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [couponError, couponIsError]);

  useEffect(() => {
    if (couponIsSuccess) {
      toast.success("Coupon Applied Successfylly!", {
        delay: 50,
        autoClose: 2000,
      });
    }
  }, [couponIsSuccess]);

  return (
    <div className="summary border-gray border p-3 rounded-3 mt-3">
      <h6 className="mb-3">Summary</h6>
      <InputGroup className="my-2">
        <Form.Control
          placeholder="Enter Coupon"
          ref={coupon_input}
          aria-label="coupon"
          className="coupon-input"
          aria-describedby="basic-addon2"
        />
        <Button
          onClick={hundleClickApplyCoupon}
          variant="success"
          id="button-addon2"
        >
          Apply
          {couponLoading ? <Spinner size="sm" className="ms-2"></Spinner> : ""}
        </Button>
      </InputGroup>
      <div className="d-flex text-gray mt-2  justify-content-between">
        <div>Subtotal {data?.cartItems?.length} item</div>
        <div>{data?.totalCartPrice || 0}$</div>
      </div>
      <div className="d-flex mt-2  justify-content-between">
        <div>Coupon code</div>
        <div>
          {(
            data?.totalCartPrice -
              (data?.totalPriceAfterDiscount || data?.totalCartPrice) || 0
          ).toFixed(2)}
          $
        </div>
      </div>
      <div className="d-flex mt-2 justify-content-between">
        <div>Shipping cost</div>
        <div>Free</div>
      </div>
      <div className="line w-100 my-3"></div>
      <div className="d-flex mt-2 justify-content-between">
        <div>Total Price</div>
        <div>{data?.totalPriceAfterDiscount || data?.totalCartPrice || 0}$</div>
      </div>
      <Button
        onClick={() => setModalShow(true)}
        className="btn-success w-100 mt-3"
        disabled={data?.cartItems?.length < 1 || !data?.cartItems}
      >
        CHECK OUT
      </Button>
      <CheckOutModel show={modalShow} onHide={hundleClickHide} id={data?._id} />
      <Button
        disabled={data?.cartItems?.length < 1 || !data?.cartItems}
        onClick={hundleClickClearCart}
        className="btn-danger w-100 mt-2"
      >
        CLEAR CART
        {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
      </Button>
      <Alert variant={"success"} className="m-0 mt-2 text-center">
        <div>Test Coupon : TECHNO-KAI</div>
      </Alert>
    </div>
  );
};

export default Summary;
