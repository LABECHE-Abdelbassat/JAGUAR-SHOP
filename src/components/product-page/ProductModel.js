import React from "react";
import ProductImages from "../../components/product-page/ProductImages";
import ProductInfo from "../../components/product-page/ProductInfo";
import Container from "react-bootstrap/esm/Container";
import { useEffect } from "react";

import { Spinner } from "react-bootstrap";
import { useGetProductQuery } from "../../reduxQuery/APIs/productApi";
import { toast } from "react-toastify";

const ProductModel = ({ id }) => {
  const { data, isLoading, isError, error } = useGetProductQuery(id);

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
          <div className="col-12 col-md-6 col-lg-5 col-xl-4">
            <ProductImages
              imageCover={data?.data?.imageCover}
              imgs={[].concat(data?.data?.images)}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-7 col-xl-8 mt-3 mt-sm-0">
            <ProductInfo product={data?.data} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductModel;
