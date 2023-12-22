import React from 'react'
import { Form, Spinner } from 'react-bootstrap'
import ProductItemAdmin from './ProductItemAdmin';
import Pagination from '../all/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';
import PaginationComponent from '../all/Pagination';
import { Link } from 'react-router-dom';
import { useGetAllProductsQuery } from '../../reduxQuery/APIs/productApi';
import ErrorMessage from '../all/ErrorMessage';

const AdminProducts = () => {
  const [page, setpage] = useState(1)
  const {data , isLoading , isError , error} = useGetAllProductsQuery(page);

  function modifyPage(page) {
    setpage(page)
  }



return (
  <div className='position-relative text-center'>
    <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
    <div>
      <div className='mb-2 align-items-center'>
  <div className='d-flex justify-content-between align-items-center'>
  <div className='text-main m-0 pb-2 fs-5'>Manage Your Products</div>
  </div>
  <div className='flex-fill line'></div>
      </div>
      {isLoading ? 
          <Spinner size='lg' variant='success' className='mt-4 ms-3'></Spinner> 
          : <div>
            <div className='row mt-4'>
              {
                data?.data.map((item) => {
                  return (
                    <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                      <ProductItemAdmin product={item} page={data.paginationResult.currentPage}/>
                    </div>
                  )
                })
              }
              

            </div>
            <PaginationComponent modifyPage={modifyPage} paginationResult={data?.paginationResult}/>
          </div>
      }
    </div> 
  </div>
  )
}

export default AdminProducts