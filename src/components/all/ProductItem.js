import React from 'react'
import { Icon } from '@iconify/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StartReview from './StartReview';

const ProductItem = ({img}) => {
  return (
    <div className='product-item'>
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        <Card.Img className='card-img-item'  variant="top" src={img} />
        <button className='add-cart-btn'>ADD TO CART</button>
        <button className='add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="25" height="25" /></button>
        <button className='quick-view-btn'><Icon icon="iconamoon:eye" color="#666" width="22" height="22" /></button>
      </div>
      <Card.Body>
        <Card.Title className='text-start product-desc text-success mt-3'>Card Title in here we put the descriptio of the product so in here we can do this of the end</Card.Title>
        <div className='row mt-3'>
          
          <div className='col d-flex align-items-end text-start'>
            450$
          </div>
          <div className='col text-end review'>
            <StartReview readOnly={true} size={20} initialValue={1.4}/>
          </div>
          

        </div>
        
      </Card.Body>
    </div>
  )
}

export default ProductItem