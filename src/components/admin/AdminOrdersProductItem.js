import React from 'react'
import { Button, Card, CloseButton } from 'react-bootstrap'
import img from "../../images/galery.jpg"

const AdminOrdersProductItem = () => {
  return (
    <div className='cart-flow'>
        <div className='product-item cart-item mt-3 d-flex'>
            <div className='p-relative card-img-cart-item-order' style={{position:"relative" , overflow:"hidden"}}>
                <Card.Img className='card-img-cart-item img-fluid'   src={img} />
            </div>
            <Card.Body className='cart-info d-flex flex-column justify-content-between py-1 pb-2 px-3' >
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className=''>Iphone 12 pro max 256GB</h4>
                    <CloseButton />;
                </div>
                <Card.Title className='text-start product-desc text-success'>Card Title in here we put the descriptio of the product so in here we can do this of the end</Card.Title>
                <div className='d-flex mt-2 gap-5'>
            <div className="color">
                <div className="fw-bold fs-6">Color: <span className="fw-semibold">Black</span></div>
                
            </div>
            <div className="size ">
                <div className="fw-bold fs-6">Size : <span className="fw-semibold">XS</span></div>
            </div>
                </div>
                <div className='d-flex mt-3 align-items-center justify-content-between'>
                <div className="fw-bold fs-6">Quantity : <span className="fw-semibold">15</span></div>


                <div className='price-section gap-3 align-items-center d-flex'>
                            <div className="fw-semibold fs-5 ">150$</div>
                            <div className="text-decoration-line-through">170$</div>
                            <div className="badge bg-success">20%</div>
                        </div>
                </div>
        
            </Card.Body>
        </div>
    </div>
  )
}

export default AdminOrdersProductItem