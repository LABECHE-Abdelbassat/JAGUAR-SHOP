import React from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Profile = () => {
  return (
    <div>
        <h2 className='color-main fw-semibold'>Profile</h2>
        <Card>
            <Card.Body><strong>Name : </strong>Labeche Abdelbassat</Card.Body>
            <Card.Body><strong>Phone : </strong>0672801669</Card.Body>
            <Card.Body><strong>Number : </strong>a.labeche@gmail.com</Card.Body>
        </Card>
        <h2 className='mt-3 color-main fw-semibold'>Change Password</h2>
        <Form>

            <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Enter the new password" />
            </Form.Group>

            <Form.Group className='mt-3 mb-3' as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Confirm the new password" />
            </Form.Group>



            <Button variant="success" className='w-100' type="submit">
                Save Password
            </Button>
            </Form>
    </div>
  )
}

export default Profile