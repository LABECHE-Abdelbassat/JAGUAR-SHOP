import React from 'react'
import { Button } from 'react-bootstrap'

const CategorieItem = ({data}) => {
  return (
    <div>
      <div className='cat-img d-flex align-items-center justify-content-center bg-primary'>
        <img src={data.image} className='img-fluid'/>
      </div>
      <div className='text-center fs-5 fw-semibold mt-2'>{data.name}</div>

    </div>
  )
}

export default CategorieItem