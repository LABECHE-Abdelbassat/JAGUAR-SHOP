import React from 'react'
import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';
import StartReview from './StartReview';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAddProductToWishlistMutation, useDeleteProductFromWishlistMutation, useGetAllProductsWishlistQuery } from '../../reduxQuery/APIs/wishlistApi';
import ErrorMessage from './ErrorMessage';
import { useAddProductToCartMutation } from '../../reduxQuery/APIs/cartApi';
import { Spinner } from 'react-bootstrap';
import SuccessMessage from './SuccessMessage';

const ProductItem = ({data}) => {
  
  const {data:wishlist ,isLoading ,isSuccess, isError , error} = useGetAllProductsWishlistQuery();
  const [addToWishlist ,{ isSuccess : addSuccess, isError : addIsError , error:addError}] = useAddProductToWishlistMutation();
  const [removeFromWishlist,{isSuccess : deleteSuccess,isError : removeIserror  , error:removeError}] = useDeleteProductFromWishlistMutation();

  const [addToCart , {isLoading:cartloading , isError:cartIsError , isSuccess:cartIsSuccess , error:cartError}] = useAddProductToCartMutation();
  async function hundleClickAddCart() {
    const cartObj = {
      productId:data._id
    }
    await addToCart(cartObj)
  }

   async function hundleClickWishlist(isClick) {
    if(!isClick){
      const  obj = {productId :data._id};
      await addToWishlist(obj);
    }else{
      await removeFromWishlist(data._id)
    }
  }


  return (
    <div className='product-item'>
      <div style={{direction:"rtl"}}>
            {cartIsSuccess ? <SuccessMessage message={"Product Added Successfully To Your Cart"}/>:""}
            {cartIsError ? <ErrorMessage error={cartError}/> : ""}
        </div>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
      <div style={{direction:"rtl"}}>
            {addIsError ? <ErrorMessage error={addError}/> : ""}
        </div>
      <div style={{direction:"rtl"}}>
            {removeIserror ? <ErrorMessage error={removeError}/> : ""}
        </div>
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        
    <Link style={{textDecoration:"none"}} to={`/products/${data._id}`}>
        <Card.Img className='card-img-item'  variant="top" src={data?.imageCover} />
        </Link>
        <button onClick={hundleClickAddCart} className='add-cart-btn'>
          ADD TO CART
          {cartloading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
        </button>
        {wishlist?.data?.some((item) => item.id === data.id) ? (
            <button onClick={()=>hundleClickWishlist(true)} className='add-whishlist-btn-active add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="30" height="50" /></button>
        ):<button onClick={()=>hundleClickWishlist(false)} className='add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="30" height="50" /></button> }

        <button  className='quick-view-btn'><Icon icon="iconamoon:eye" color="#666" width="22" height="22" /></button>
      </div>
      <Card.Body>
        <Card.Title className='text-start product-desc text-success mt-3'>{data.title}</Card.Title>
        <div className='row mt-3'>
          
          <div className='col d-flex align-items-end text-start'>
            {data.price} USD
          </div>
          <div className='col text-end review'>
            <StartReview readOnly={true} size={20} initialValue={data.ratingsAverage}/>
          </div>
          

        </div>
        
      </Card.Body>
    </div>
  )
}

export default ProductItem