import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";
import StartReview from "./StartReview";
import { Link } from "react-router-dom";
import {
  useAddProductToWishlistMutation,
  useDeleteProductFromWishlistMutation,
  useGetAllProductsWishlistQuery,
} from "../../reduxQuery/APIs/wishlistApi";
import { useAddProductToCartMutation } from "../../reduxQuery/APIs/cartApi";
import { Modal, Offcanvas, Spinner } from "react-bootstrap";
import ProductModel from "../product-page/ProductModel";
import CartCanvas from "../cart-page/CartCanvas";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductItem = ({ data }) => {
  const { data: wishlist } = useGetAllProductsWishlistQuery();
  const [addToWishlist, { isError: addIsError, error: addError }] =
    useAddProductToWishlistMutation();
  const [removeFromWishlist, { isError: removeIserror, error: removeError }] =
    useDeleteProductFromWishlistMutation();

  const [
    addToCart,
    {
      isLoading: cartloading,
      isError: cartIsError,
      isSuccess: cartIsSuccess,
      error: cartError,
    },
  ] = useAddProductToCartMutation();

  async function handleAddCartClick() {
    const cartObj = {
      productId: data._id,
      color: data?.colors[0],
    };
    await addToCart(cartObj);
  }

  async function handleWishlistClick(isClick) {
    if (!isClick) {
      const obj = { productId: data._id };
      await addToWishlist(obj);
    } else {
      await removeFromWishlist(data._id);
    }
  }

  const [lgShow, setLgShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (cartIsSuccess) {
      handleShow();
      // toast.success("Product added to cart successfully!");
    }
    if (cartIsError) {
      toast.error(
        cartError?.status === 400
          ? cartError?.data?.errors[0]?.msg
          : cartError?.data?.message || "Error Adding product to cart",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [cartIsSuccess, cartIsError, cartError]);

  useEffect(() => {
    if (removeIserror) {
      toast.error(
        removeError?.data?.message || "Error removing product from wishlist",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [removeError, removeIserror]);
  useEffect(() => {
    if (addError) {
      toast.error(
        addError?.status === 400
          ? addError?.data?.errors[0]?.msg
          : addError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [addError, addIsError]);

  function OffCanvasExample({ show, setShow }) {
    const handleClose = () => setShow(false);

    return (
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="text-main m-0 p-0 fw-semibold fs-4">
              SHOPPING CART
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CartCanvas />
        </Offcanvas.Body>
      </Offcanvas>
    );
  }

  return (
    <div className="product-item">
      <div
        className="p-relative"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <OffCanvasExample setShow={setShow} show={show} />

        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Product Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProductModel id={data?._id} />
          </Modal.Body>
        </Modal>
        <Link style={{ textDecoration: "none" }} to={`/products/${data._id}`}>
          <Card.Img
            className="card-img-item rounded-1"
            variant="top"
            src={data?.imageCover}
          />
        </Link>
        <button onClick={handleAddCartClick} className="add-cart-btn">
          ADD TO CART
          {cartloading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
        </button>
        {wishlist?.data?.some((item) => item.id === data.id) ? (
          <button
            onClick={() => handleWishlistClick(true)}
            className="add-whishlist-btn-active add-wishlist-btn"
          >
            <Icon
              className="icon-product"
              icon="iconamoon:heart"
              color="#666"
              width="30"
              height="50"
            />
          </button>
        ) : (
          <button
            onClick={() => handleWishlistClick(false)}
            className="add-wishlist-btn"
          >
            <Icon
              className="icon-product"
              icon="iconamoon:heart"
              color="#666"
              width="30"
              height="50"
            />
          </button>
        )}

        <button onClick={() => setLgShow(true)} className="quick-view-btn">
          <Icon icon="iconamoon:eye" width="22" height="22" />
        </button>
      </div>
      <Card.Body>
        <Card.Title className="text-start product-desc text-success mt-3">
          {data.title}
        </Card.Title>
        <div className="row mt-3">
          <div className="col d-flex align-items-end gap-2 text-start">
            <div>{data.price}$</div>
            <div className="badge bg-success" style={{ marginBottom: "2px" }}>
              {Math.floor((data?.sold / (data?.price + data?.sold)) * 100)}%
            </div>
          </div>
          <div className="col text-end review">
            <StartReview
              readOnly={true}
              size={20}
              initialValue={data.ratingsAverage}
            />
          </div>
        </div>
      </Card.Body>
    </div>
  );
};

export default ProductItem;
