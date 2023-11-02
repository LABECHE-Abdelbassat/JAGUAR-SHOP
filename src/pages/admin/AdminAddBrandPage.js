import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminAddBrand from '../../components/admin/AdminAddBrand'

const AdminAddBrandPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminAddBrand/>
        </div>
      </div>
    </Container>
  )
}

export default AdminAddBrandPage