import React from 'react'
import { Form } from 'react-bootstrap'

const ManageAdresses = () => {
  return (
    <div>
        <h2 className='color-main fw-semibold'>Add New Address</h2>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="email" placeholder="rue 45 , 156 " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detailed Address</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="email" placeholder="0652....." />
            </Form.Group>
        </Form>

    </div>
  )
}

export default ManageAdresses