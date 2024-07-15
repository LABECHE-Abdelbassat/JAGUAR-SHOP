import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ProductItemDetailed from "../../components/all/ProductItemDetailed";
import { useGetUserCartQuery } from "../../reduxQuery/APIs/cartApi";
import ErrorMessage from "../../components/all/ErrorMessage";
import ProductItemSmall from "../all/ProductItemSmall";
import { ToastContainer, toast } from "react-toastify";

const CartCanvas = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetUserCartQuery();
  useEffect(() => {
    if (isError) {
      if (!error?.data?.message?.startsWith("There is no cart for this user")) {
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
          <div className="col-12 order-2 order-lg-1 ">
            {error?.data?.message?.startsWith(
              "There is no cart for this user"
            ) ? (
              <div className="m-auto d-flex justefy-content-center mt-4">
                <h3 className="m-auto">Cart is Empty</h3>
              </div>
            ) : (
              data?.data?.cartItems?.map((item, index) => {
                return <ProductItemSmall key={index} item={item} />;
              })
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default CartCanvas;
