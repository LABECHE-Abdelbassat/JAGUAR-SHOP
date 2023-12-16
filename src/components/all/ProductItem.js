import React from 'react'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StartReview from './StartReview';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWishListProduct, deleteWishListProduct, getAllWishListProducts } from './../../redux/actions/wishlistAction';
import { useEffect } from 'react';

const ProductItem = ({isClicked,data}) => {
  
  // const [isClick, setisClick] = useState(isClicked)
  // const token = localStorage.getItem("token")
  // const wishlist = useSelector(state => state.WishlistReducer.wishList.data);

  // useEffect(() => {
  //   wishlist.map(item => {
  //     if(item._id === data._id){
  //       setisClick(true)
  //     }
  //   })
  // })

 
  
  // const dispatch = useDispatch();
  //  async function hundleClickWishlist(event) {
  //   if(!isClick){
  //     await dispatch(createWishListProduct("/api/v1/wishlist",{productId:data._id}, token))
  //     await dispatch(getAllWishListProducts("/api/v1/wishlist",token))
  //     setisClick(!isClick)
  //   }else{
  //     await dispatch(deleteWishListProduct(`/api/v1/wishlist/${data._id}`,token))
  //     await dispatch(getAllWishListProducts("/api/v1/wishlist",token))

  //     setisClick(!isClick)
  //   }
  // }
  return (
    <div className='product-item'>
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        
    <Link style={{textDecoration:"none"}} to={`/products/${data._id}`}>
        <Card.Img className='card-img-item'  variant="top" src={data.imageCover} />
        </Link>
        <button className='add-cart-btn'>ADD TO CART</button>
        {/* {!isClick ? <button onClick={hundleClickWishlist} className='add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="30" height="50" /></button>
        : <button onClick={hundleClickWishlist} className='add-whishlist-btn-active add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="30" height="50" /></button>} */}
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