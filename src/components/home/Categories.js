import React, { useEffect } from "react";
import CategorieItem from "./CategorieItem";
import Container from "react-bootstrap/esm/Container";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./../../redux/actions/categoryAction";
import { Button, Spinner } from "react-bootstrap";
import { useGetAllCategoriesQuery } from "../../reduxQuery/APIs/categoryApi";
import ErrorMessage from "../all/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";

const Categories = () => {
  const { data, isLoading, isError, error } = useGetAllCategoriesQuery();
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
    <Container className="my-4 pb-2">
      <ToastContainer />
      {isLoading ? (
        <Spinner size="lg" variant="success" className="mt-4"></Spinner>
      ) : data?.data?.length < 1 ? (
        <div className="text-main m-0 p-0 fs-5">NO CATEGORY FOUND</div>
      ) : (
        <Swiper
          breakpoints={{
            100: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper swiper-wrapper-cat"
        >
          {data?.data.map((item) => {
            return (
              <SwiperSlide>
                <CategorieItem data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </Container>
  );
};

export default Categories;
