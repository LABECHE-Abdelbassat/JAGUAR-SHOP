import React from 'react'
import { Form } from 'react-bootstrap'
import ProductItemAdmin from '../components/admin/ProductItemAdmin'

const AdminProducts = () => {
    const data = [1,1,1,1,1,,1,1]
  return (
    <div>
        <div className='mb-2 align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='text-main m-0 pb-2 fs-5'>WE FOUNT 48 RESULT</div>

        </div>
        <div className='flex-fill line'></div>
      </div>
      <div className='row mt-4'>
        {
          data.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                <ProductItemAdmin img={"galery.jpg"}/>
              </div>
            )
          })
        }
        

      </div>
    </div>
  )
}

export default AdminProducts