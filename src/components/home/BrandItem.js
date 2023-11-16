import React from 'react'

const BrandItem = ({data}) => {
  return (
    <div>
      <div className='d-flex brand-img align-items-center justify-content-center rounded-3 bg-light'>
        <img src={data.image} className='img-fluid'/>
      </div>
    </div>
  )
}

export default BrandItem