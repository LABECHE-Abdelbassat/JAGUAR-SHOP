import React, { useEffect } from "react";
import CategorieItem from "./CategorieItem";
import Container from "react-bootstrap/esm/Container";

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BrandItem from "./BrandItem";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "./../../redux/actions/brandAction";
import { useGetAllBrandsQuery } from "../../reduxQuery/APIs/brandApi";
import { Spinner } from "react-bootstrap";
import ErrorMessage from "../all/ErrorMessage";
import { ToastContainer, toast } from "react-toastify";

const Brands = () => {
  const { data, isLoading, isError, error } = useGetAllBrandsQuery();

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
    <Container className="mt-4 position-relative">
      <ToastContainer />

      <div>
        <div className="d-flex my-4 align-items-center">
          <div className="text-main m-0 p-0 fs-5">ALL Brands</div>

          <div className="flex-fill line mx-3"></div>
        </div>
        {isLoading ? (
          <Spinner size="lg" variant="success" className="mt-4"></Spinner>
        ) : data?.data?.length < 1 ? (
          <div className="text-main m-0 mb-4 p-0 fs-5">NO BRAND FOUND</div>
        ) : (
          <Swiper
            navigation={true}
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
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
            modules={[Navigation]}
            className="mySwiper mb-5"
          >
            {data?.data.map((item) => {
              return (
                <SwiperSlide>
                  <BrandItem data={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </Container>
  );
};

export default Brands;
