import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductImages = ({ imageCover, imgs }) => {
  // const imgst = [...imgs];
  // var lastElement = imgst.pop();

  // imgst.unshift(lastElement);

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
          <img src={imageCover} />
        </SwiperSlide>
        {imgs?.map((item, index) => {
          if (item !== imageCover) {
            return (
              <SwiperSlide key={index}>
                <img src={item} />
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default ProductImages;
