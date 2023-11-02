import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AdminManageOrders = () => {
  const ordersData = [1,1,1,1,1,1,1];
  return (
    <div>
        <h2 className='color-main fw-semibold'>Manage All Orders</h2>
        {ordersData.map(item => {
          return <Link to={"/admin/orders/15"} style={{textDecoration:"none"}}>
                  <Card className='mt-3'>
                      <Card.Body>
                        <div className='mb-2'><strong>Order N: : </strong>150</div>
                        <div><strong>From : </strong>Soltani Ilias , <strong>Soltaniilias@gmail.com</strong></div>
                        <div className='d-flex justify-content-between'>
                          <div><strong>Delivred : </strong>NO<strong> Payed : </strong> YES <strong>Payment Method : </strong> VISA CARD</div>
                          <strong>200 USD</strong>
                        </div>
                      </Card.Body>
                  </Card>
                </Link>
        })}
        
    </div>
  )
}

export default AdminManageOrders