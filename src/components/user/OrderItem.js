import React from 'react'
import OrdersProductItem from './OrdersProductItem'
import { Row } from 'react-bootstrap'
import galery from "../../images/galery.jpg"
const OrderItem = () => {
  return (
    <div className='border border-1 mb-3 rounded-3 p-3'>
        <div className='fs-4 fw-semibold'>Order n#15</div>
        <OrdersProductItem img={galery}/>
        <OrdersProductItem img={galery}/>
        <OrdersProductItem img={galery}/>
        <div className='d-flex mt-2 pt-1 justify-content-between'>
        <div className="fw-bold fs-5">Order State: <span className="fw-semibold">Delivred</span></div>
            <div className="fw-semibold fs-5 ">150$</div>

        </div>
    </div>
  )
}

export default OrderItem