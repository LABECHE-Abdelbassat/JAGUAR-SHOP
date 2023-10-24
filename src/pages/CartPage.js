import React from 'react'
import { Container } from 'react-bootstrap'
import ProductItemDetailed from '../components/all/ProductItemDetailed'
import Summary from '../components/cart-page/Summary'

const CartPage = () => {
    let datatwo = [1,1,1,1,1,1,1,1]
  return (
    <Container>
        <div className='d-flex my-0 align-items-center'>
        <div className='text-main m-0 p-0 fw-semibold fs-4'>SHOPING CART</div>
        <div className='flex-fill line mx-3'></div>
      </div>
      <div className='row'>
        <div className='col-12 order-2 order-lg-1 col-lg-8 col-xxl-9'>
            <ProductItemDetailed img={"galery.jpg"}/>
            <ProductItemDetailed img={"galery.jpg"}/>
            <ProductItemDetailed img={"galery.jpg"}/>
        </div>
        <div className='col-12 order-1 order-lg-2 col-lg-4 col-xxl-3'><Summary/></div>
      </div>
    </Container>
  )
}

export default CartPage