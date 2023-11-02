import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import OrdersProductItem from '../../components/user/OrdersProductItem'
import MyOrders from '../../components/user/MyOrders'
import AdminOrderItem from '../../components/admin/AdminOrderItem'

const AdminOrderPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminOrderItem/>
        </div>
      </div>
    </Container>
  )
}

export default AdminOrderPage