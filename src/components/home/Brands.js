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
import { useGetAllBrandsQuery } from '../../reduxQuery/APIs/brandApi';
import { Spinner } from 'react-bootstrap';
import ErrorMessage from '../all/ErrorMessage';

const Brands = () => {
  const  {data , isLoading,isError , error }= useGetAllBrandsQuery();

  return (
    <Container className='mt-4 position-relative'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
         <div>
         <div className=' fs-2 text-center mb-3'>brands</div>
         {isLoading ? <Spinner size='lg' variant='success' className='mt-4'></Spinner> 
         :<Swiper 
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
           data?.data.map(item =>{
             return <SwiperSlide><BrandItem data={item}/></SwiperSlide>
           })
         }
   
   
       </Swiper>
         }
         </div>

     
      

    </Container>
  )
}

export default Brands