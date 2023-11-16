import React from 'react'
import StartReview from '../all/StartReview'
import { useRef } from 'react';
import { useEffect } from 'react';

const ProductInfo = ({product}) => {
  const quantity = useRef();
  const decreaseBtn=useRef();
  const increaseBtn=useRef();
  useEffect(() => {
    decreaseBtn.current.disabled=true
  }, [])
  
  function hundleClickAddCart() {
    
  }
  function hundleClickDecrease() {
    quantity.current.innerHTML = +quantity.current.innerText - 1 
    increaseBtn.current.disabled = false

    if(+quantity.current.innerText <=1){
      decreaseBtn.current.disabled = true
    }
  }
  function hundleClickIncrease() {
    quantity.current.innerHTML = +quantity.current.innerText + 1 
    decreaseBtn.current.disabled = false

    if(+quantity.current.innerText >= product.quantity){
      increaseBtn.current.disabled = true
    }
  }

  return (
    <div>
      <div className='price-section gap-3 align-items-center d-flex'>
        <div className="fw-semibold fs-5 ">{product.priceAfterDiscount | product.price} USD</div>
        <div className="text-decoration-line-through">{product.price} USD</div>
        <div className="badge bg-success">20%</div>
      </div>
      <h3 className='mt-2'>{product?.title}</h3>
      <div className="mt-2 d-flex align-items-center gap-3">
        <div className='fs-5 mt-1-5'>4.5</div>
        <StartReview readOnly={true} size={22} initialValue={1.7} />
        <div className='line-h mt-1-5'></div>
        <button className='reviews-btn mt-1-5'>50 reviews</button>

      </div>
      <div className="mt-3 text-gray">
        lorem ipsum doler sit commit in git lorem ipsum doler sit commit in git lorem ipsum doler sit commit in git lorem ipsum doler sit commit in git lorem ipsum doler sit commit in git lorem ipsum doler 
      </div>
      <div className="line w-100 my-3"></div>
      <div className="color">
        <div className="fw-bold fs-4">Color: <span className="fw-semibold">Black</span></div>
        <div class="gap-2 mt-3 d-flex" role="group" aria-label="Basic radio toggle button group">

          <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" ></input>
          <label class="yello color-item rounded-circle bg-warning" for="btnradio4"></label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" ></input>
          <label class="yello color-item rounded-circle bg-danger" for="btnradio5"></label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" ></input>
          <label class="yello color-item rounded-circle bg-dark" for="btnradio6"></label>
        </div>
        
      </div>
      {/* <div className="size mt-3">
        <div className="fw-bold fs-4">Size : <span className="fw-semibold">XS</span></div>
        <div class="gap-2 mt-3 d-flex" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio2" id="btnradio1" autocomplete="off" ></input>
          <label class="btn btn-outline-success" for="btnradio1">S</label>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio2" autocomplete="off" ></input>
          <label class="btn btn-outline-success" for="btnradio2">M</label>

          <input type="radio" class="btn-check" name="btnradio2" id="btnradio3" autocomplete="off"></input>
          <label class="btn btn-outline-success" for="btnradio3">L</label>
        </div>
        

      </div> */}
      <div className="d-flex gap-3 mt-4">
        <div className="w-50 d-flex gap-3  align-items-center justify-content-center bg-light">
          <button ref={decreaseBtn} onClick={hundleClickDecrease} className='btn btn-outline-success rounded-circle btn-quantity'>-</button>
          <div ref={quantity}>1</div>
          <button ref={increaseBtn} onClick={hundleClickIncrease} className='btn btn-outline-success rounded-circle btn-quantity'>+</button>
        </div>
        <button onClick={hundleClickAddCart} className="btn w-100 py-2 fw-bold fs-5 btn-success text-white">ADD TO CART</button>
      </div>
      <div className="line w-100 my-4"></div>
      <div className="fs-5">Categories : <span className="">colothes</span></div>
      <div className="fs-5">Sub Categories : <span className="">T-shits winter-clothes</span></div>
      <div className="fs-5">Brands : <span className="">Adidas</span></div>


    </div>
  )
}

export default ProductInfo