import React from 'react'
import StartReview from '../all/StartReview'
import { Card } from 'react-bootstrap'
import { Icon } from '@iconify/react'

const ProductItemAdmin = ({img}) => {
  return (
    <div className='product-item'>
      <div className='p-relative' style={{position:"relative" , overflow:"hidden"}}>
        <Card.Img className='card-img-item'  variant="top" src={img} />
        <button className='add-cart-btn'>Update Product</button>
        <button className='add-wishlist-btn'><Icon className='icon-product' icon="fluent:delete-12-filled"  color='#666' width="25" height="25" /></button>
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

export default ProductItemAdmin