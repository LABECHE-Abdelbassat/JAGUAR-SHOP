import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const ProductImages = ({ imgs}) => {

  const imgst = [...imgs]
  var lastElement = imgst.pop();

  imgst.unshift(lastElement);
  console.log("rerender")


  return (
    <div className='image-swiper'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper2"
      >
        
        {imgst?.map((item , index)=>{
          return <SwiperSlide key={index}>
          <img src={item} />
        </SwiperSlide>
        })}
        

      </Swiper>
    </div>
  )
}

export default ProductImages