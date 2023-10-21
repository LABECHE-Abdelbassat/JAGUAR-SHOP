import React from 'react'
import CategorieItem from './CategorieItem';
import Container from 'react-bootstrap/esm/Container';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import BrandItem from './BrandItem';

const Brands = () => {
  return (
    <Container className='mt-4'>
      <div className=' fs-2 text-center mb-3'>brands</div>
      <Swiper 
        navigation={true}
        breakpoints={{
          100 : {
            slidesPerView:2,
            spaceBetween:20,
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
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>
        <SwiperSlide><BrandItem/></SwiperSlide>


      </Swiper>

    </Container>
  )
}

export default Brands