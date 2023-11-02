import React from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import Select from 'react-select'

const AdminAddSubCategory = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
  return (
    <div className='add-brand'>
      <h4 className='color-main'>Add Brand</h4>
      
    <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
            <Form.Control type="password" placeholder="Coupon name" />
    </Form.Group>
    <Select
        className='mt-3'
        closeMenuOnSelect={true}
        options={options}
        />
    <Button variant='success' className='w-100 mt-3'>Add Brand</Button>
    </div>
  )
}

export default AdminAddSubCategory