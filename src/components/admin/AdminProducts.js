import React from 'react'
import { Form } from 'react-bootstrap'
import ProductItemAdmin from './ProductItemAdmin';
import Pagination from '../all/Pagination';

const AdminProducts = ({img}) => {
    const data = [1,1,1,1,1,,1,1]
  return (
    <div>
        <div className='mb-2 align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='text-main m-0 pb-2 fs-5'>Manage Your Products</div>

        </div>
        <div className='flex-fill line'></div>
      </div>
      <div className='row mt-4'>
        {
          data.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                <ProductItemAdmin img={img}/>
              </div>
            )
          })
        }
        

      </div>
      <Pagination/>
    </div>
  )
}

export default AdminProducts