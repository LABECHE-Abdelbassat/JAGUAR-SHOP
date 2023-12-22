import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductItem from './../all/ProductItem';
import PaginationComponent from '../all/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllWishListProducts } from '../../redux/actions/wishlistAction';
import { useNavigate } from 'react-router-dom';

const ProductLine = ({limit,modifyPage , data}) => {
  const navigation = useNavigate()
  function hundleClickSeeMore(){
    navigation('/result-page',{state:{navigateData : 'top product'}})
  }
  return (
    <div>
      <div className='d-flex my-4 align-items-center'>
        <div className='text-main m-0 p-0 fs-5'>TOP SALLED PRODUCTS</div>
        <div className='flex-fill line mx-3'></div>
        {limit==4 ? <button onClick={hundleClickSeeMore} className='see-more-btn'>see more</button>:""}

      </div>
      <div className='row'>
        {
          data?.data?.map((item,index) => {
            if(index>=limit){
              return
            }
            return (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 pb-4'>
                <ProductItem data={item} />
              </div>
            )
          })
        }
        

      </div>
      {limit>=4 ? "":<PaginationComponent modifyPage={modifyPage} paginationResult={data?.paginationResult}/>}
      
    </div>
  )
}

export default ProductLine