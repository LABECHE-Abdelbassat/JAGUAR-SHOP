import React from 'react'
import { Card, CloseButton, Form } from 'react-bootstrap'

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
        <h2 className='color-main fw-semibold'>Your Addresses</h2>
        <Card onClick={()=>{console.log("hi there")}} className='mt-3'>
                <Card.Body className='d-flex justify-content-between'>
                    <div><strong>Name : </strong>Labeche Abdelbassat</div>
                    <CloseButton/>
                </Card.Body>
                <Card.Body><strong>Phone : </strong>0672801669</Card.Body>
                <Card.Body><strong>Number : </strong>a.labeche@gmail.com</Card.Body>
            </Card>
            <Card className='mt-3'>
                <Card.Body className='d-flex justify-content-between'>
                    <div><strong>Name : </strong>Labeche Abdelbassat</div>
                    <CloseButton/>
                </Card.Body>
                <Card.Body><strong>Phone : </strong>0672801669</Card.Body>
                <Card.Body><strong>Number : </strong>a.labeche@gmail.com</Card.Body>
            </Card>
            <Card className='mt-3'>
                <Card.Body className='d-flex justify-content-between'>
                    <div><strong>Name : </strong>Labeche Abdelbassat</div>
                    <CloseButton/>
                </Card.Body>
                <Card.Body><strong>Phone : </strong>0672801669</Card.Body>
                <Card.Body><strong>Number : </strong>a.labeche@gmail.com</Card.Body>
            </Card>
    </div>
  )
}

export default ManageAdresses