import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import OrdersProductItem from '../../components/user/OrdersProductItem'
import MyOrders from '../../components/user/MyOrders'
import AdminOrderItem from '../../components/admin/AdminOrderItem'

const AdminOrderPage = () => {
  return (
    <Container className='position-relative'>

            <AdminOrderItem/>

    </Container>
  )
}

export default AdminOrderPage