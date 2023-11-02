import { Icon } from '@iconify/react'
import React from 'react'
import { ListGroup, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBarAdmin = () => {
  return (
    <div>
      <ListGroup className='' defaultActiveKey="#link1">
          <Link to={"/manage-profile"} style={{textDecoration:"none"}}>
            <ListGroup.Item action variant='light' className='d-flex gap-2 align-items-center' href="#link1">
            <Icon className='' icon="fluent:delete-12-filled"  color='#fff' width="20" height="20" />
              Link 1
            </ListGroup.Item>
          </Link>
          <Link to={"/manage-profile"} style={{textDecoration:"none"}}>
            <ListGroup.Item action variant='light' href="#link2">
              Link 1
            </ListGroup.Item>
          </Link>
          <Link to={"/manage-profile"} style={{textDecoration:"none"}}>
            <ListGroup.Item action variant='light' href="#link3">
              Link 1
            </ListGroup.Item>
          </Link>
          <Link to={"/manage-profile"} style={{textDecoration:"none"}}>
            <ListGroup.Item action variant='light' href="#link4">
              Link 1
            </ListGroup.Item>
          </Link>
    </ListGroup>
    </div>
  )
}

export default SideBarAdmin


