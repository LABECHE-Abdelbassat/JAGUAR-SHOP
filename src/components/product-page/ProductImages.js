import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const ProductImages = ({ imageCover, imgs }) => {
  return (
    <div className="image-swiper">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={imageCover} alt="Product Img" />
        </SwiperSlide>
        {imgs?.map((item, index) => {
          if (item !== imageCover) {
            return (
              <SwiperSlide key={index}>
                <img src={item} alt="Product Img" />
              </SwiperSlide>
            );
          } else {
            return "";
          }
        })}
      </Swiper>
    </div>
  );
};

export default ProductImages;
