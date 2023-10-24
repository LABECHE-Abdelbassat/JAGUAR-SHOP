import React from 'react'
import ProductItem from '../all/ProductItem'
import { Form } from 'react-bootstrap'

const ProductResultLine = ({data}) => {
  return (
    <div>
        <div className='my-2 align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='text-main m-0 py-2 fs-5'>WE FOUNT 48 RESULT</div>

                <Form.Select className='mb-2' aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            </Form.Select>
        </div>
        <div className='flex-fill line'></div>
      </div>
      <div className='row mt-4'>
        {
          data.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                <ProductItem img={"galery.jpg"}/>
              </div>
            )
          })
        }
        

      </div>
    </div>
  )
}

export default ProductResultLine