import React from 'react'
import OrdersProductItem from './OrdersProductItem'
import { Row } from 'react-bootstrap'
import galery from "../../images/galery.jpg"
const OrderItem = ({data,index}) => {
  return (
    <div className='border border-1 mb-3 rounded-3 p-3'>
        <div className='fs-4 fw-semibold'>Order n#{index} For : {data?.user?.name} with email : {data?.user?.email}</div>
        <div className="line w-100 my-3"></div>
        <div className='fs-4 mb-2 fw-semibold'>ShippingAddress</div>
        <div className="fw-bold fs-5">Details : <span className="fw-semibold"> {data?.shippingAddress?.details} </span></div>
        <div className="fw-bold fs-5">Phone : <span className="fw-semibold"> {data?.shippingAddress?.phone} </span></div>
        <div className="fw-bold fs-5">City : <span className="fw-semibold"> {data?.shippingAddress?.city} </span></div>
        <div className="fw-bold fs-5">Postal Code : <span className="fw-semibold"> {data?.shippingAddress?.postalCode} </span></div>

        <div className="line w-100 my-3"></div>
        {data?.cartItems.map((item , index)=>{
          return <OrdersProductItem key={index} data={item} />
        })}
        <div className="line w-100 my-3"></div>
        <div className="fw-bold fs-5">Tax Price : <span className="fw-semibold"> {data?.taxPrice} </span></div>
        <div className="fw-bold fs-5">Shipping Price : <span className="fw-semibold"> {data?.shippingPrice} </span></div>
        <div className="fw-bold fs-5">Payment Methode Type : <span className="fw-semibold"> {data?.paymentMethodType} </span></div>


        <div className='d-flex mt-2 pt-1 justify-content-between'>
        <div className="fw-bold fs-5">Order State: <span className="fw-semibold">Paid : {data?.isPaid ? 'Yes' : 'No'} , Delivered : {data?.isDelivered ? 'Yes' : 'No'} </span></div>
            <div className="fw-semibold fs-5 ">{data?.totalOrderPrice}$</div>

        </div>
    </div>
  )
}

export default OrderItem