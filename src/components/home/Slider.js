import React from "react";
import Container from "react-bootstrap/esm/Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../images/first_offer.jpg";
import banner2 from "../../images/second_offer.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper main-slider"
      >
        <SwiperSlide>
          <img src={banner1} alt="Banner" className="w-100 rounded-2 h-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="Banner" className="w-100 rounded-2 h-100" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Slider;
