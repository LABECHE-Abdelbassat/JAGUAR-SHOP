import React from 'react'
import { Container } from 'react-bootstrap'
import AdminManageOrders from './../../components/admin/AdminManageOrders';
import SideBarAdmin from '../../components/admin/SideBarAdmin';

const AdminManageOrdersPage = () => {
  return (
    <Container>
            <AdminManageOrders/>
    </Container>
  )
}

export default AdminManageOrdersPage