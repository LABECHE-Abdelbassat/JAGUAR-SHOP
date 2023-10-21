import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import ProductItem from './../all/ProductItem';

const ProductLine = ({data}) => {
  return (
    <div>
      <div className='d-flex my-4 align-items-center'>
        <div className='text-main m-0 p-0 fs-5'>TOP SALLED PRODUCTS</div>
        <div className='flex-fill line mx-3'></div>
        <button className='see-more-btn'>see more</button>
      </div>
      <div className='row'>
        {
          data.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 pb-4'>
                <ProductItem img={"galery.jpg"}/>
              </div>
            )
          })
        }
        

      </div>
    </div>
  )
}

export default ProductLine