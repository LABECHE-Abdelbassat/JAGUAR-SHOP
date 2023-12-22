import React, { useEffect } from 'react'
import Slider from '../components/home/Slider'
import ProductLine from '../components/home/ProductLine'
import Banner from '../components/home/Banner'
import Brands from '../components/home/Brands'
import Footer from '../components/all/Footer'
import TheNav from '../components/all/TheNav'
import StartReview from '../components/all/StartReview'
import Container from 'react-bootstrap/esm/Container'
import CategoriesModel from '../components/home/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getTopProducts } from './../redux/actions/productAction';
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useGetAllProductsQuery } from '../reduxQuery/APIs/productApi'
import { useGetAllBrandsQuery } from '../reduxQuery/APIs/brandApi'
import { useGetAllCategoriesQuery } from '../reduxQuery/APIs/categoryApi'
import { useGetAllSubCategoriesOnCategoryQuery, useGetAllSubCategoriesQuery } from '../reduxQuery/APIs/subCategoryApi'
import { useGetAllProductsWishlistQuery } from '../reduxQuery/APIs/wishlistApi'
import { useGetAllReviewsOnProductQuery, useGetAllReviewsQuery } from '../reduxQuery/APIs/reviewApi'
import ErrorMessage from '../components/all/ErrorMessage'

const Home = () => {
  const [page, setpage] = useState(1)
  const {data , isLoading , isError , error} = useGetAllProductsQuery(`?page=${page}`);
  const {data:topData , isLoading : topLoading} = useGetAllProductsQuery('');
  function modifyPage(page){
    setpage(page)
  }
  return (
    <Container className='text-center position-relative'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
        <Slider/>
        <CategoriesModel/>
        {topLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>:
        <ProductLine limit={4} data={topData}/>
        }
        <Banner/>
        {isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>
        :<ProductLine modifyPage={modifyPage} data={data}/>
        }
        
        <Brands/>
    </Container>
  )
}

export default Home