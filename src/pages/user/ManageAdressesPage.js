import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarUser from '../../components/all/SideBarUser'
import ManageAdresses from '../../components/user/ManageAdresses'

const ManageAdressesPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarUser/>
        </div>
        <div className='col-9'>
            <ManageAdresses/>
        </div>
      </div>
    </Container>
  )
}

export default ManageAdressesPage