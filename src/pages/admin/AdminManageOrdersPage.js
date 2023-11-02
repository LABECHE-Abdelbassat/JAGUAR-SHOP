import React from 'react'
import { Container } from 'react-bootstrap'
import AdminManageOrders from './../../components/admin/AdminManageOrders';
import SideBarAdmin from '../../components/admin/SideBarAdmin';

const AdminManageOrdersPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminManageOrders/>
        </div>
      </div>
    </Container>
  )
}

export default AdminManageOrdersPage