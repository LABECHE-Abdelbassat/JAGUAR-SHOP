import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminAddCategory from '../../components/admin/AdminAddCategory'

const AdminAddCategoryPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminAddCategory/>
        </div>
      </div>
    </Container>
  )
}

export default AdminAddCategoryPage