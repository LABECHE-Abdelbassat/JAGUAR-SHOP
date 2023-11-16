import React from 'react'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StartReview from './StartReview';
import { Link } from 'react-router-dom';

const ProductItem = ({data}) => {
  return (
    <Link style={{textDecoration:"none"}} to={`/products/${data._id}`}>
    <div className='product-item'>
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        <Card.Img className='card-img-item'  variant="top" src={data.imageCover} />
        <button className='add-cart-btn'>ADD TO CART</button>
        <button className='add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="25" height="25" /></button>
        <button className='quick-view-btn'><Icon icon="iconamoon:eye" color="#666" width="22" height="22" /></button>
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
    </Link>
  )
}

export default ProductItem