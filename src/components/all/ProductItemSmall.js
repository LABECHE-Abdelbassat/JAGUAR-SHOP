import React, { useEffect, useRef } from "react";
import { Card, CloseButton, Spinner } from "react-bootstrap";
import { useGetProductQuery } from "../../reduxQuery/APIs/productApi";
import ErrorMessage from "./ErrorMessage";
import {
  useRemoveSpecificCartItemMutation,
  useUpdateCartProductQuantityMutation,
} from "../../reduxQuery/APIs/cartApi";

const ProductItemSmall = ({ item }) => {
  const decreaseBtn = useRef();
  const increaseBtn = useRef();

  const { data, isError, error, isSuccess, isLoading } = useGetProductQuery(
    item?.product
  );
  const [deleteFromCart, { isError: deleteIsError, error: deleteError }] =
    useRemoveSpecificCartItemMutation();
  const [updateQuantity, { isError: updateIsError, error: updateError }] =
    useUpdateCartProductQuantityMutation();

  async function hundleClickeRemoveItemFromCart() {
    await deleteFromCart(item._id);
  }
  async function hundleClickDecreaseCount() {
    const quantity = item.quantity - 1;
    const quantifyObj = {
      quantity: quantity,
    };
    await updateQuantity({ id: item._id, quantity: quantifyObj });
    increaseBtn.current.disabled = false;

    if (+quantity <= 1) {
      decreaseBtn.current.disabled = true;
    }
  }
  async function hundleClickIncreaseCount() {
    const quantity = item.quantity + 1;
    const quantifyObj = {
      quantity: quantity,
    };
    await updateQuantity({ id: item._id, quantity: quantifyObj });
    decreaseBtn.current.disabled = false;

    if (+quantity >= data?.data?.quantity) {
      increaseBtn.current.disabled = true;
    }
  }
  useEffect(() => {
    if (isSuccess) {
      if (item?.quantity <= 1) {
        decreaseBtn.current.disabled = true;
      }
      if (item?.quantity >= data?.data?.quantity) {
        increaseBtn.current.disabled = true;
      }
    }
  }, [isSuccess]);
  return (
    <div className="cart-flow">
      <div style={{ direction: "rtl" }}>
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <div style={{ direction: "rtl" }}>
        {updateIsError ? <ErrorMessage error={updateError} /> : ""}
      </div>
      <div style={{ direction: "rtl" }}>
        {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
      </div>
      {isLoading ? (
        <div className="text-center">
          <Spinner
            size="sm"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : (
        <div className=" mt-3 d-flex">
          <div
            className="p-relative m"
            style={{
              position: "relative",
              overflow: "hidden",
              width: 80,
              height: 120,
            }}
          >
            <Card.Img
              className=""
              variant="top"
              src={data?.data?.imageCover}
              style={{ aspectRatio: "3/4", objectFit: "cover" }}
            />
          </div>
          <Card.Body className="cart-info d-flex flex-column justify-content-between  pb-3 px-3">
            <div className="d-flex  justify-content-between align-items-top">
              <h4 className="me-2 product-title-cart">{data?.data?.title}</h4>
              <CloseButton
                style={{ marginTop: "4px" }}
                onClick={hundleClickeRemoveItemFromCart}
              ></CloseButton>
            </div>
            <div className="d-flex mt-3 align-items-center justify-content-between">
              <div className=" d-flex gap-3  align-items-center justify-content-center ">
                <button
                  ref={decreaseBtn}
                  onClick={hundleClickDecreaseCount}
                  className="btn btn-outline-success rounded-circle btn-quantity"
                >
                  -
                </button>
                <div>{item?.quantity}</div>
                <button
                  ref={increaseBtn}
                  onClick={hundleClickIncreaseCount}
                  className="btn btn-outline-success rounded-circle btn-quantity"
                >
                  +
                </button>
              </div>

              <div className="price-section gap-3 align-items-center d-flex">
                <div className="fw-semibold fs-5 ">{data?.data?.price}$</div>
              </div>
            </div>
          </Card.Body>
        </div>
      )}
    </div>
  );
};

export default ProductItemSmall;
