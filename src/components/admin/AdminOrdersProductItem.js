import React from 'react'
import { Button, Card, CloseButton } from 'react-bootstrap'
import img from "../../images/galery.jpg"

const AdminOrdersProductItem = ({data}) => {
  return (
    <div className='cart-flow'>
        <div className='product-item cart-item mt-3 d-flex'>
            <div className='p-relative card-img-cart-item-order' style={{position:"relative" , overflow:"hidden"}}>
                <Card.Img className='card-img-cart-item img-fluid'   src={data?.product?.imageCover} />
            </div>
            <Card.Body className='cart-info d-flex flex-column justify-content-between py-1 pb-2 px-3' >
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className=''>{data?.product?.title}</h4>
                </div>
                {/* <Card.Title className='text-start product-desc text-success'>{data?.product?.description}</Card.Title> */}
                <div className='d-flex mt-2 gap-5'>
            <div className="color">
                <div className="fw-bold fs-6">Color : <span className="fw-semibold">{data?.color}</span></div>
                
            </div>
            
            {/* <div className="size ">
                <div className="fw-bold fs-6">Size : <span className="fw-semibold">XS</span></div>
            </div> */}
                </div>
                <div className="color">
                <div className="fw-bold fs-6">Category : <span className="fw-semibold">{data?.product?.category?.name}</span></div>
                
            </div>
                <div className='d-flex mt-3 align-items-center justify-content-between'>
                <div className="fw-bold fs-6">Quantity : <span className="fw-semibold">{data?.quantity}</span></div>
                <div className="fw-bold fs-5"> <span className="fw-semibold">{data?.price}$</span></div>


                </div>
        
            </Card.Body>
        </div>
    </div>
  )
}

export default AdminOrdersProductItem