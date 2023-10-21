import React from 'react'
import CategorieItem from './CategorieItem';
import Container from 'react-bootstrap/esm/Container';

import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Categories = () => {
  return (
    <Container className='mt-4'>
      <Swiper 
        pagination={{
          clickable: true,
        }}
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
        modules={[Pagination]}
        className="mySwiper swiper-wrapper-cat"
      >
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>
        <SwiperSlide><CategorieItem/></SwiperSlide>

      </Swiper>

    </Container>

    
  )
}

export default Categories