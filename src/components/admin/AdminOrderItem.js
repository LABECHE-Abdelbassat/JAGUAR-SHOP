import React from 'react'
import AdminOrdersProductItem from './AdminOrdersProductItem'
import galery from "../../images/galery.jpg"
import { Card, Form } from 'react-bootstrap'

const AdminOrderItem = () => {
  return (
    <div>
        <h2 className='mb-3 color-main fw-semibold'>Order n#15</h2>
        <div className='border border-1 mb-3 rounded-3 p-3 pt-0'>
            <AdminOrdersProductItem img={galery}/>
            <AdminOrdersProductItem img={galery}/>
            <AdminOrdersProductItem img={galery}/>
            
        </div>
        <div className='border border-1 mb-3 rounded-3 p-3'>
                <div className='mb-2'><strong>Name : </strong>Labeche Abdelbassat</div>
                <div className='mb-2'><strong>Phone : </strong>0672801669</div>
                <div className='mb-2'><strong>Number : </strong>a.labeche@gmail.com</div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='fs-5 color-main'><strong>Total Price : 150 USD</strong></div>
                    <Form.Select className='mb-2' aria-label="Default select example">
                        <option>Order State</option>
                        <option value="1">In Proccess</option>
                        <option value="2">Delivred</option>
                        <option value="3">Rejected</option>
                    </Form.Select>
                </div>
        </div>

    </div>
    
  )
}

export default AdminOrderItem