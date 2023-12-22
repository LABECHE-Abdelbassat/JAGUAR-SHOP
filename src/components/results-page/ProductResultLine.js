import React, { useEffect, useState } from 'react'
import ProductItem from '../all/ProductItem'
import { Form } from 'react-bootstrap'
import PaginationComponent from '../all/Pagination'
import { useLocation } from 'react-router-dom'

const ProductResultLine = ({modifyOrder,modifyPage ,data}) => {
  const location = useLocation();
  const locationdata = location.state?.navigateData;
  console.log(locationdata)
  const [isDes, setisDes] = useState(false)
  const [ordertext, setordertext] = useState("")
  useEffect(() => {
    if(locationdata?.length>0){
      modifyOrder( `&sort=-ratingsAverage`)
    }
  }, [locationdata])
  
  function hundleChangeOrderOption(e){
    let order = '';
    setordertext(e.target.value)
    if(isDes){
      order = `&sort=${e.target.value}`
    }else{
      order = `&sort=-${e.target.value}`
    }
    modifyOrder(order)
  }
  function hundleChangeIsDes(e){
    if(e.target.checked){
      setisDes(true)
      modifyOrder( `&sort=${ordertext}`)
    }else{
      setisDes(false)
      modifyOrder( `&sort=-${ordertext}`)
    }
  }
  return (
    <div>
        <div className='my-2 align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='text-main m-0 py-2 fs-5'>{data?.results} RESULTS</div>

          <div className='d-flex align-items-center gap-3'>
            {locationdata?.length>0 ? 
            <Form.Select onChange={hundleChangeOrderOption} className='mb-2' aria-label="Default select example">
            <option>Ordered By</option>
            <option value="price">price</option>
            <option value="quantity">quantity</option>
            <option selected value="ratingsAverage">ratingsAverage</option>
            <option value="ratingsQuantity">ratingsQuantity</option>
          </Form.Select>
            :
            <Form.Select onChange={hundleChangeOrderOption} className='mb-2' aria-label="Default select example">
            <option>Ordered By</option>
            <option value="price">price</option>
            <option value="quantity">quantity</option>
            <option value="ratingsAverage">ratingsAverage</option>
            <option value="ratingsQuantity">ratingsQuantity</option>
          </Form.Select>
            }
          
          <Form.Check 
                type={'checkbox'}
                value={`des`}
                className='mb-2'
                onChange={hundleChangeIsDes}
                id={`brand-checkbox`}
                label={`Ascending`}
              />
          </div>
        </div>
        <div className='flex-fill line'></div>
      </div>
      <div className='row mt-4'>
        {
          data?.data?.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                <ProductItem data={item}/>
              </div>
            )
          })
        }
        

      </div>
      <PaginationComponent modifyPage={modifyPage} paginationResult={data?.paginationResult}/>

    </div>
  )
}

export default ProductResultLine