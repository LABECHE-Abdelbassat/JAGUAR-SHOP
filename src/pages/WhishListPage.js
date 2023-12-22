import React, { useState } from 'react'
import ProductLine from '../components/home/ProductLine'
import { Container, Spinner } from 'react-bootstrap'
import ProductItem from '../components/all/ProductItem'
import { useGetAllProductsWishlistQuery } from '../reduxQuery/APIs/wishlistApi'
import PaginationComponent from '../components/all/Pagination'
import ErrorMessage from '../components/all/ErrorMessage'

const WhishListPage = () => {
  const {data:wishlist ,isLoading , isError , error} = useGetAllProductsWishlistQuery();
  return (
    <Container className='position-relative'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
        <div className='d-flex flex-column mb-4'>
        <div className='text-main m-0 mb-3 p-0 fs-1'>WhishList</div>
        <div className='flex-fill line mb-2'></div>
      </div>
      {isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>:
            <div className='row'>
            {
              wishlist?.data?.map((item) => {
                return (
                  <div className='col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-3 pb-4'>
                    <ProductItem data={item}/>
                  </div>
                )
              })
            }
            
    
          </div>}

    </Container>
  )
}

export default WhishListPage