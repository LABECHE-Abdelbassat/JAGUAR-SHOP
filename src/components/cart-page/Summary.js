import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useApplyCouponToCartMutation, useClearUserCartMutation } from '../../reduxQuery/APIs/cartApi';
import ErrorMessage from '../all/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import SuccessMessage from '../all/SuccessMessage';
import MyVerticallyCenteredModal from '../all/MyVerticallyCenteredModal';
import CheckOutModel from './CheckOutModel';

const Summary = ({data}) => {
  const coupon_input = useRef();
  const [modalShow, setModalShow] = useState(false);
  const [clearCart , {isLoading , isError , isSuccess , error}] = useClearUserCartMutation();
  const [applyCoupon , {isLoading:couponLoading , isError:couponIsError , isSuccess:couponIsSuccess , error:couponError}] = useApplyCouponToCartMutation();
  const navigation = useNavigate()
  async function hundleClickClearCart(){
    await clearCart();
  }
  useEffect(() => {
    if(isSuccess){
      navigation('/',{replace:true});
    }
  }, [isSuccess])
  function hundleClickHide(){
      setModalShow(false)
  }
  async function hundleClickApplyCoupon(){
    const couponObj = {
      coupon:coupon_input.current.value
    }
    await applyCoupon(couponObj);
  }
  return (
    <div className='summary border-gray border p-3 rounded-3 mt-3'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
      <div style={{direction:"rtl"}}>
      {couponIsSuccess ? <SuccessMessage message={"Coupon Applied Successfully"}/>:""}
            {couponIsError ? <ErrorMessage error={couponError}/> : ""}
        </div>
        <h6 className='mb-3'>Order n-6 . {data?.createdAt.slice(0,10)}</h6>
        <InputGroup className="my-2">
        <Form.Control
          placeholder="Enter Coupon"
          ref={coupon_input}
          aria-label="coupon"
          className='coupon-input'
          aria-describedby="basic-addon2"
        />
        <Button onClick={hundleClickApplyCoupon} variant="success" id="button-addon2">
          Apply
          {couponLoading ? <Spinner size='sm' className='ms-2'></Spinner> : ""}
        </Button>
        </InputGroup>
        <div className='d-flex text-gray mt-2  justify-content-between'>
            <div>Subtotal {data?.cartItems?.length} item</div>
            <div>{data?.totalCartPrice}$</div>
        </div>
        <div className='d-flex mt-2  justify-content-between'>
            <div>Coupon code</div>
            <div>{(data?.totalCartPrice - (data?.totalPriceAfterDiscount || data?.totalCartPrice)).toFixed(2)}$</div>
        </div>
        <div className='d-flex mt-2 justify-content-between'>
            <div>Shipping cost</div>
            <div>Free</div>
        </div>
        <div className="line w-100 my-3"></div>
        <div className='d-flex mt-2 justify-content-between'>
            <div>Total Price</div>
            <div>{data?.totalPriceAfterDiscount || data?.totalCartPrice}$</div>
        </div>
        <Button onClick={() => setModalShow(true)} className='btn-success w-100 mt-3'>CHECK OUT</Button>
        <CheckOutModel
            show={modalShow}
            onHide={hundleClickHide}
            id={data?._id}
        />
        <Button onClick={hundleClickClearCart} className='btn-danger w-100 mt-2'>CLEAR CART
        {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
        </Button>
    </div>
  )
}

export default Summary