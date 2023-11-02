import React from 'react'
import { Container } from 'react-bootstrap'
import AdminCoupon from './../../components/admin/AdminCoupon';
import SideBarAdmin from '../../components/admin/SideBarAdmin';

const AdminCouponPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminCoupon/>
        </div>
      </div>
    </Container>
  )
}

export default AdminCouponPage