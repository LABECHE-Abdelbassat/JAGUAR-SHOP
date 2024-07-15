import React, { useEffect, useRef } from "react";
import Slider from "../components/home/Slider";
import ProductLine from "../components/home/ProductLine";
import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import Footer from "../components/all/Footer";
import TheNav from "../components/all/TheNav";
import StartReview from "../components/all/StartReview";
import Container from "react-bootstrap/esm/Container";
import CategoriesModel from "../components/home/Categories";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getTopProducts,
} from "./../redux/actions/productAction";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useGetAllProductsQuery } from "../reduxQuery/APIs/productApi";
import { useGetAllBrandsQuery } from "../reduxQuery/APIs/brandApi";
import { useGetAllCategoriesQuery } from "../reduxQuery/APIs/categoryApi";
import {
  useGetAllSubCategoriesOnCategoryQuery,
  useGetAllSubCategoriesQuery,
} from "../reduxQuery/APIs/subCategoryApi";
import { useGetAllProductsWishlistQuery } from "../reduxQuery/APIs/wishlistApi";
import {
  useGetAllReviewsOnProductQuery,
  useGetAllReviewsQuery,
} from "../reduxQuery/APIs/reviewApi";
import ErrorMessage from "../components/all/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const scrollref = useRef();
  const [page, setpage] = useState(1);
  const { data, isLoading, isError, error } = useGetAllProductsQuery(
    `?page=${page}`
  );
  const { data: topData, isLoading: topLoading } = useGetAllProductsQuery(
    "?sort=-ratingsAverage"
  );
  function modifyPage(page) {
    setpage(page);
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

  return (
    <Container className="text-center position-relative">
      <ToastContainer />
      <Slider />
      <CategoriesModel />
      {topLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="my-4 align-self-center"
          ></Spinner>
        </div>
      ) : topData?.data?.length < 1 ? (
        <div className="text-main m-0 mb-4 p-0 fs-5">NO PRODUCT FOUND</div>
      ) : (
        <ProductLine limit={4} data={topData} />
      )}
      <Banner />
      {isLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : data?.data?.length < 1 ? (
        <div className="text-main m-0 p-0 fs-5">NO PRODUCT FOUND</div>
      ) : (
        <ProductLine modifyPage={modifyPage} data={data} type={"all"} />
      )}

      <Brands />
    </Container>
  );
};

export default Home;
