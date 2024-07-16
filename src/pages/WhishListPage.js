import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import ProductItem from "../components/all/ProductItem";
import { useGetAllProductsWishlistQuery } from "../reduxQuery/APIs/wishlistApi";
import NoItemMessage from "../components/all/NoItemMessage";
import { toast } from "react-toastify";

const WhishListPage = () => {
  const {
    data: wishlist,
    isLoading,
    isError,
    error,
  } = useGetAllProductsWishlistQuery();
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

  return (
    <Container className="position-relative">
      <div className="d-flex flex-column mb-4">
        <div className="text-main m-0 mb-3 p-0 fs-1">WhishList</div>
        <div className="flex-fill line mb-2"></div>
      </div>
      {wishlist?.data?.length < 1 ? (
        <NoItemMessage />
      ) : (
        <>
          {isLoading ? (
            <div className="text-center">
              <Spinner
                size="lg"
                variant="success"
                className="mt-4 align-self-center"
              ></Spinner>
            </div>
          ) : (
            <div className="row">
              {wishlist?.data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 pb-4"
                  >
                    <ProductItem data={item} />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </Container>
  );
};

export default WhishListPage;
