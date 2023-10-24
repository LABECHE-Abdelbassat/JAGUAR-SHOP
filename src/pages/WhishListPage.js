import React from 'react'
import ProductLine from '../components/home/ProductLine'
import { Container } from 'react-bootstrap'
import ProductItem from '../components/all/ProductItem'

const WhishListPage = () => {
  return (
    <Container>
        <div className='d-flex flex-column mb-4'>
        <div className='text-main m-0 mb-3 p-0 fs-1'>WhishList</div>
        <div className='flex-fill line mb-2'></div>
      </div>
      <div className='row'>
        {
          [1,1,1,1,1,1,1,1,1,1,1,1].map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 pb-4'>
                <ProductItem img={"galery.jpg"}/>
              </div>
            )
          })
        }
        

      </div>
    </Container>
  )
}

export default WhishListPage