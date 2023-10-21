import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination } from 'swiper/modules';


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
        <div className='slider w-100 d-flex align-items-center justify-content-center text-light text-center bg-success'>
          SLIDER
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider d-flex w-100 align-items-center justify-content-center text-light text-center bg-success'>
          SLIDER 2
        </div>
        </SwiperSlide>
       
      </Swiper>
    </Container>
  )
}

export default Slider