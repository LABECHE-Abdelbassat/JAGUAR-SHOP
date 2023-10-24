import React from 'react'
import { ListGroup, Nav } from 'react-bootstrap'

const SideBarUser = () => {
  return (
    <div>
        <ListGroup className='' defaultActiveKey="#link1">
      <ListGroup.Item action variant='success' href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action variant='success' href="#link2">
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action variant='success' href="#link3">
        Link 2
      </ListGroup.Item>
    </ListGroup>
    </div>
  )
}

export default SideBarUser