import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminAddProduct from '../../components/admin/AdminAddProduct'
import AdminUpdateProduct from '../../components/admin/AdminUpdateProduct'

const AdminUpdateProductPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminUpdateProduct/>
        </div>
      </div>
    </Container>
  )
}

export default AdminUpdateProductPage