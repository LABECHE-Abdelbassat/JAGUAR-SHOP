import React from 'react'
import { Container } from 'react-bootstrap'
import SideBarUser from '../../components/all/SideBarUser'
import Profile from '../../components/user/Profile'

const ProfilePage = () => {
  return (
    <Container>
        
      <div className="row">
        <div className="col-3">
            <SideBarUser/>
        </div>
        <div className='col-9'>
            <Profile/>
        </div>
      </div>
    </Container>
  )
}

export default ProfilePage