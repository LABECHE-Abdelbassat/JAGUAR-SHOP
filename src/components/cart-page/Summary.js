import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Summary = () => {
  return (
    <div className='summary border-gray border p-3 rounded-3 mt-3'>
        <h6 className='mb-3'>Order n-6 . 15-12-2023</h6>
        <InputGroup className="my-2">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          className='coupon-input'
          aria-describedby="basic-addon2"
        />
        <Button variant="success" id="button-addon2">
          Button
        </Button>
        </InputGroup>
        <div className='d-flex text-gray mt-2  justify-content-between'>
            <div>Subtotal 6 item</div>
            <div>15 USD</div>
        </div>
        <div className='d-flex mt-2  justify-content-between'>
            <div>Coupon code</div>
            <div>25 USD</div>
        </div>
        <div className='d-flex mt-2 justify-content-between'>
            <div>Shipping cost</div>
            <div>28 USD</div>
        </div>
        <div className="line w-100 my-3"></div>
        <div className='d-flex mt-2 justify-content-between'>
            <div>Shipping cost</div>
            <div>28 USD</div>
        </div>
        <Button className='btn-success w-100 mt-3'>dsflk</Button>
        <Button className='btn-success w-100 mt-2'>dsflk</Button>
    </div>
  )
}

export default Summary