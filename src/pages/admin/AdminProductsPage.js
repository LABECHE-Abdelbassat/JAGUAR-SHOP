import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
import AdminProducts from './../../components/admin/AdminProducts';
const AdminProductPage = ({keyword}) => {
  return (
    <Container> 
      <AdminProducts keyword={keyword}/>
    </Container>
  )
}

export default AdminProductPage