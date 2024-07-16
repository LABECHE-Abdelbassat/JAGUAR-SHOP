import React, { useState } from "react";
import StartReview from "../all/StartReview";
import { useEffect } from "react";
import { useAddProductToCartMutation } from "../../reduxQuery/APIs/cartApi";
import { Offcanvas, Spinner } from "react-bootstrap";
import CartCanvas from "../cart-page/CartCanvas";
import { toast } from "react-toastify";

const ProductInfo = ({ product }) => {
  const [selectedColor, setselectedColor] = useState(null);
  const [addToCart, { isLoading, isError, isSuccess, error }] =
    useAddProductToCartMutation();

  async function hundleClickAddCart() {
    const cartObj = {
      productId: product._id,
      color: selectedColor,
    };
    await addToCart(cartObj);
  }

  function hundleClickChange(selected) {
    setselectedColor(selected.target.value);
  }

  useEffect(() => {
    if (isSuccess) {
      handleShow();
    }
  }, [isSuccess]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  function OffCanvasExample({ show, setShow }) {
    const handleClose = () => setShow(false);

    return (
      <>
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className="text-main m-0 p-0 fw-semibold fs-4">
                SHOPING CART
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartCanvas />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  useEffect(() => {
    if (isError) {
      console.log(error);
      toast.error(
        error?.status === 400
          ? error?.data?.errors[0]?.msg
          : error?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [isError, error]);
  return (
    <div>
      <OffCanvasExample setShow={setShow} show={show} />

      {!product?.sold ? (
        <div className="price-section gap-3 align-items-center d-flex">
          <div className="fw-semibold fs-5 ">{product?.price}$</div>
        </div>
      ) : (
        <div className="price-section gap-3 align-items-center d-flex">
          <div className="fw-semibold fs-5 ">{product?.price}$</div>
          <div className="text-decoration-line-through">
            {product?.sold + product?.price}$
          </div>
          <div className="badge bg-success">
            {Math.floor(
              (product?.sold / (product?.price + product?.sold)) * 100
            )}
            %
          </div>
        </div>
      )}
      <h3 className="mt-2">{product?.title}</h3>
      <div className="mt-2 d-flex align-items-center gap-3">
        {product?.ratingsAverage?.length > 0 ? (
          <div className="fs-5 mt-1-5">{product?.ratingsAverage}</div>
        ) : (
          ""
        )}
        <StartReview
          readOnly={true}
          size={22}
          initialValue={product?.ratingsAverage}
        />
        <div className="line-h mt-1-5"></div>
        <button className="reviews-btn mt-1-5">
          {product?.ratingsQuantity} reviews
        </button>
      </div>
      <div className="mt-3 text-gray">{product?.description}</div>
      <div className="line w-100 my-3"></div>
      {product?.colors?.length < 1 ? (
        ""
      ) : (
        <div className="color">
          <div className="fw-bold fs-4">Colors : </div>
          <div
            className="gap-2 mt-3 d-flex"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            {product?.colors.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    onChange={hundleClickChange}
                    type="radio"
                    value={item}
                    className="btn-check"
                    name="btnradio"
                    id={"btnradio" + index}
                    autoComplete="off"
                  ></input>
                  <label
                    style={{ backgroundColor: item }}
                    className="yello color-item rounded-circle"
                    htmlFor={"btnradio" + index}
                  ></label>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="d-flex gap-3 mt-4">
        <button
          onClick={hundleClickAddCart}
          className="btn w-100 py-2 fw-bold fs-5 btn-success text-white"
        >
          ADD TO CART
          {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </button>
      </div>
      <div className="line w-100 my-4"></div>
      <div className="fs-5">
        Categories : <span className="">{product?.category?.name}</span>
      </div>
      <div className="fs-5">
        Sub Categories :{" "}
        <span className="">
          {product?.subcategories?.map((item, index) => {
            return <span key={index}>{item.name} . </span>;
          })}
        </span>
      </div>
      <div className="fs-5">
        Brands : <span className="">{product?.brand?.name}</span>
      </div>
    </div>
  );
};

export default ProductInfo;
