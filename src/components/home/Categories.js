import React, { useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from './../../redux/actions/categoryAction';
import { Button, Spinner } from 'react-bootstrap';
import { useGetAllCategoriesQuery } from '../../reduxQuery/APIs/categoryApi';
import ErrorMessage from '../all/ErrorMessage';

const Categories = () => {
  const  {data , isLoading ,isError , error}= useGetAllCategoriesQuery();


  return (
    <Container className='mt-4'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
      {isLoading ? <Spinner size='lg' variant='success' className='mt-4'></Spinner> 
      :<Swiper 
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
      {data?.data.map(item=>{
        return <SwiperSlide><CategorieItem data={item}/></SwiperSlide>
      })}
      

    </Swiper>}
      
    </Container>

    
  )
}

export default Categories