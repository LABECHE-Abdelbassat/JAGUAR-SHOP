import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllBrands } from './../../redux/actions/brandAction';

const Brands = () => {
  const brands = useSelector(state => state.BrandReducer.allBrands.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBrands("/api/v1/brands"))
  }, [])
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
        {
          brands.map(item =>{
            return <SwiperSlide><BrandItem data={item}/></SwiperSlide>
          })
        }


      </Swiper>

    </Container>
  )
}

export default Brands