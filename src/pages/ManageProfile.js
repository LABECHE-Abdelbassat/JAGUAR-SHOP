import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarUser from '../components/all/SideBarUser'
import ProfilePage from './ProfilePage'
import ManageAdresses from './ManageAdresses'
import CouponPage from './CouponPage'
import AdminProducts from './AdminProducts'
import ManageOrdersPage from './ManageOrdersPage'
import OrderDetailsPage from './OrderDetailsPage'

const ManageProfile = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarUser/>
        </div>
        <div className='col-9'>
            {/* <ProfilePage/> */}
            {/* <ManageAdresses/> */}
            {/* <CouponPage/> */}
            {/* <AdminProducts/> */}
            {/* <ManageOrdersPage/> */}
            <OrderDetailsPage/>
        </div>
      </div>
    </Container>
  )
}

export default ManageProfile