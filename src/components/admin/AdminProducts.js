import React from 'react'
import { Form } from 'react-bootstrap'
import ProductItemAdmin from './ProductItemAdmin';
import Pagination from '../all/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../redux/actions/productAction';
import PaginationComponent from '../all/Pagination';
import { Link } from 'react-router-dom';

const AdminProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts("/api/v1/products?page=1"))
  }, [])

  const allProducts = useSelector(state=> state.ProductReducer.allProduct);
  const error = useSelector(state=>state.ProductReducer.error)

  return (
    <div>
      {error === "" ? <div>
        <div className='mb-2 align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
        <div className='text-main m-0 pb-2 fs-5'>Manage Your Products</div>
        </div>
        <div className='flex-fill line'></div>
      </div>
      <div className='row mt-4'>
        {
          allProducts?.data.map((item) => {
            return (
              <div className='col-12 col-sm-6 col-md-6 col-lg-4 text-center mb-3 pb-4'>
                <ProductItemAdmin product={item} page={allProducts.paginationResult.currentPage}/>
              </div>
            )
          })
        }
        

      </div>
      <PaginationComponent paginationResult={allProducts.paginationResult}/>
    </div> : <h5>{error?.response?.data?.message}</h5>}
    </div>
  )
}

export default AdminProducts