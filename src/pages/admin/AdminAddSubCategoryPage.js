import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminAddSubCategory from '../../components/admin/AdminAddSubCategory'

const AdminAddSubCategoryPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarAdmin/>
        </div>
        <div className='col-9'>
            <AdminAddSubCategory/>
        </div>
      </div>
    </Container>
  )
}

export default AdminAddSubCategoryPage