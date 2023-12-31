import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminProducts from './../../components/admin/AdminProducts';
const AdminProductPage = () => {
  return (
    <Container> 
        
      <div className="row">
        <div className="col-sm-0 col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminProducts/>
        </div>
      </div>
    </Container>
  )
}

export default AdminProductPage