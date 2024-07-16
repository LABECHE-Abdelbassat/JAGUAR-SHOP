import React, { useEffect, useRef } from "react";
import { Card, CloseButton, Spinner } from "react-bootstrap";
import { useGetProductQuery } from "../../reduxQuery/APIs/productApi";
import {
  useRemoveSpecificCartItemMutation,
  useUpdateCartProductQuantityMutation,
} from "../../reduxQuery/APIs/cartApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductItemDetailed = ({ item }) => {
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
    if (deleteIsError) {
      toast.error(
        deleteError?.status === 400
          ? deleteError?.data?.errors[0]?.msg
          : deleteError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [deleteIsError, deleteError]);

  return (
    <div className="cart-flow">
      {isLoading ? (
        <div className="text-center">
          <Spinner
            size="sm"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : (
        <div className="product-item cart-item mt-3 d-flex">
          <Link
            className="p-relative card-img-cart-item"
            style={{
              textDecoration: "none",
              position: "relative",
              overflow: "hidden",
            }}
            to={`/products/${data?.data?._id}`}
          >
            <Card.Img
              className="card-img-cart-item rounded-1"
              variant="top"
              src={data?.data?.imageCover}
            />
          </Link>
          <Card.Body className="cart-info d-flex flex-column justify-content-between py-1 pb-2 px-3">
            <div className="d-flex  justify-content-between align-items-top">
              <h4 className="me-2 product-title-cart">{data?.data?.title}</h4>
              <CloseButton
                style={{ marginTop: "4px" }}
                onClick={hundleClickeRemoveItemFromCart}
              ></CloseButton>
            </div>
            <Card.Title className="text-start product-desc text-success">
              {data?.data?.description}
            </Card.Title>
            <div className="d-flex mt-2 gap-5">
              <div className="color">
                {/* <div className="fw-bold fs-6">Color: <span className="fw-semibold">Black</span></div> */}
                <div
                  class="gap-2 mt-2 d-flex"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    autocomplete="off"
                  ></input>
                  <label
                    style={{ backgroundColor: `${item.color}` }}
                    className="yello color-item rounded-circle"
                    for="btnradio4"
                  ></label>
                </div>
              </div>
              {/* <div className="size ">
            <div className="fw-bold fs-6">Size : <span className="fw-semibold">XS</span></div>
            <div class="gap-2 mt-2 d-flex" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio2" id="btnradio1" autocomplete="off" ></input>
            <label class="btn btn-outline-success" for="btnradio1">S</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio2" autocomplete="off" ></input>
            <label class="btn btn-outline-success" for="btnradio2">M</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off"></input>
            <label class="btn btn-outline-success" for="btnradio3">L</label>
            </div>
            

        </div> */}
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
              {!data?.data?.sold ? (
                <div className="price-section gap-3 align-items-center d-flex">
                  <div className="fw-semibold fs-5 ">{data?.data?.price}$</div>
                </div>
              ) : (
                <div className="price-section gap-3 align-items-center d-flex">
                  <div className="fw-semibold fs-5 ">{data?.data?.price}$</div>
                  <div className="text-decoration-line-through">
                    {data?.data?.sold + data?.data?.price}$
                  </div>
                  <div className="badge bg-success">
                    {Math.floor(
                      (data?.data?.sold /
                        (data?.data?.price + data?.data?.sold)) *
                        100
                    )}
                    %
                  </div>
                </div>
              )}
            </div>
          </Card.Body>
        </div>
      )}
    </div>
  );
};

export default ProductItemDetailed;
