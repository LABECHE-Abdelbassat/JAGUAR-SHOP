import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ProductItemDetailed from "../components/all/ProductItemDetailed";
import Summary from "../components/cart-page/Summary";
import { useGetUserCartQuery } from "../reduxQuery/APIs/cartApi";
import ErrorMessage from "../components/all/ErrorMessage";
import EmptyCartMessage from "./../components/all/EmptyCartMessage";
import { ToastContainer, toast } from "react-toastify";

const CartPage = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetUserCartQuery();
  useEffect(() => {
    if (!error?.data?.message?.startsWith("There is no cart for this user")) {
      if (isError) {
        toast.error(
          error?.status === 400
            ? error?.data?.errors[0]?.msg
            : error?.data?.message || "Network Error!",
          { delay: 50, autoClose: 2000 }
        );
      }
    }
  }, [isError, error]);

  return (
    <Container className="position-relative">
      <ToastContainer />
      <div className="d-flex my-0 align-items-center">
        <div className="text-main m-0 p-0 fw-semibold fs-4">SHOPING CART</div>
        <div className="flex-fill line mx-3"></div>
      </div>
      <div className="row">
        {isLoading ? (
          <div className="text-center">
            <Spinner
              size="lg"
              variant="success"
              className="mt-4 align-self-center"
            ></Spinner>
          </div>
        ) : (
          <div className="col-12 order-2 order-lg-1 col-lg-8 col-xxl-9">
            {error?.data?.message?.startsWith(
              "There is no cart for this user"
            ) || data?.data?.cartItems?.length < 1 ? (
              <div className="m-auto d-flex justefy-content-center mt-4">
                <EmptyCartMessage />
              </div>
            ) : (
              data?.data?.cartItems?.map((item, index) => {
                return <ProductItemDetailed key={index} item={item} />;
              })
            )}
          </div>
        )}
        {error?.data?.message?.startsWith("There is no cart for this user") ||
        data?.data?.cartItems?.length < 1 ? (
          <div className="col-12 order-1 order-lg-2 col-lg-4 col-xxl-3">
            <Summary data={null} />
          </div>
        ) : (
          <div className="col-12 order-1 order-lg-2 col-lg-4 col-xxl-3">
            <Summary data={data?.data} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartPage;
