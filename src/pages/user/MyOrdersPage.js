import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarUser from '../../components/all/SideBarUser'
import MyOrders from '../../components/user/MyOrders'

const MyOrdersPage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarUser/>
        </div>
        <div className='col-9'>
            <MyOrders/>
        </div>
      </div>
    </Container>
  )
}

export default MyOrdersPage