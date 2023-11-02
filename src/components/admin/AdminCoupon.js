import React from 'react'
import { Button,Col, Card, Form, CloseButton } from 'react-bootstrap'

const AdminCoupon = () => {
  return (
    <div>
        <h2 className='color-main fw-semibold'>Add New Coupon</h2>
        <Form>

            <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Coupon name" />
            </Form.Group>

            <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Expire date" />
            </Form.Group>

            <Form.Group className='mt-3 mb-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="% discount" />
            </Form.Group>



            <Button variant="success" className='w-100' type="submit">
                Add Coupon
            </Button>
            </Form>
            <h2 className='mt-3 color-main fw-semibold'>All Coupons</h2>

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

export default AdminCoupon