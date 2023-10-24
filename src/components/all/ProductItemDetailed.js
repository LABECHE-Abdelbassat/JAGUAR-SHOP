import React from 'react'
import { Button, Card } from 'react-bootstrap'
import StartReview from './StartReview'
import { Icon } from '@iconify/react'

const ProductItemDetailed = ({img}) => {
  return (
    <div className='cart-flow'>
        <div className='product-item cart-item mt-3 d-flex'>
            <div className='p-relative card-img-cart-item' style={{position:"relative" , overflow:"hidden"}}>
                <Card.Img className='card-img-cart-item'  variant="top" src={img} />
                <button className='add-wishlist-btn'><Icon className='icon-product' icon="iconamoon:heart" color='#666' width="25" height="25" /></button>
                <button className='quick-view-btn'><Icon icon="iconamoon:eye" color="#666" width="22" height="22" /></button>
            </div>
            <Card.Body className='cart-info d-flex flex-column justify-content-between py-1 pb-2 px-3' >
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className=''>Iphone 12 pro max 256GB</h4>
                    <Button className='text-success btn-light'>X</Button>
                </div>
                <Card.Title className='text-start product-desc text-success'>Card Title in here we put the descriptio of the product so in here we can do this of the end</Card.Title>
                <div className='d-flex mt-2 gap-5'>
            <div className="color">
                <div className="fw-bold fs-6">Color: <span className="fw-semibold">Black</span></div>
                <div class="gap-2 mt-2 d-flex" role="group" aria-label="Basic radio toggle button group">

                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" ></input>
                <label class="yello color-item rounded-circle bg-warning" for="btnradio4"></label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" ></input>
                <label class="yello color-item rounded-circle bg-danger" for="btnradio5"></label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" ></input>
                <label class="yello color-item rounded-circle bg-dark" for="btnradio6"></label>
                </div>
                
            </div>
            <div className="size ">
                <div className="fw-bold fs-6">Size : <span className="fw-semibold">XS</span></div>
                <div class="gap-2 mt-2 d-flex" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio2" id="btnradio1" autocomplete="off" ></input>
                <label class="btn btn-outline-success" for="btnradio1">S</label>

                <input type="radio" class="btn-check" name="btnradio2" id="btnradio2" autocomplete="off" ></input>
                <label class="btn btn-outline-success" for="btnradio2">M</label>

                <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off"></input>
                <label class="btn btn-outline-success" for="btnradio3">L</label>
                </div>
                

            </div>
                </div>
                <div className='d-flex mt-3 align-items-center justify-content-between'>
                        
                <div className=" d-flex gap-3  align-items-center justify-content-center ">
                    <button className='btn btn-outline-success rounded-circle btn-quantity'>-</button>
                    <div>15</div>
                    <button className='btn btn-outline-success rounded-circle btn-quantity'>+</button>
                </div>

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

export default ProductItemDetailed