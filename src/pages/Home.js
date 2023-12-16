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

const Home = () => {
  // const [loading, setloading] = useState(false)
  // const topProducts = useSelector(state => state.ProductReducer.topProduct);
  // const allProducts = useSelector(state=> state.ProductReducer.allProduct);
  // const dispatch = useDispatch();
  // async function dispatching() {
  //   await dispatch(getAllProducts("/api/v1/products?page=1"))
  //   await dispatch(getTopProducts("/api/v1/products"))
  // }
  // const userInfo= useSelector(state => state.AuthReducer.userInfo)
  
  // useEffect(() => {
  //   setloading(true)
  //   dispatching();
  //   setloading(false)

  //   if(userInfo.token.length > 5){
  //     localStorage.setItem("token",userInfo.token)
  //     console.log(localStorage.getItem("token"))
  //     }
  // }, [])
  const {data , isLoading , isError , error} = useGetAllProductsQuery();
  const brands = useGetAllBrandsQuery();
  const categories = useGetAllCategoriesQuery();
  const subcat = useGetAllSubCategoriesQuery();
  const wishlist = useGetAllProductsWishlistQuery();
  const review = useGetAllReviewsQuery();
  console.log(review)
  return (
    <Container className='text-center'>
        <Slider/>
        {/* <CategoriesModel/> */}
        {/* {loading ? <Spinner className='fs-2'></Spinner>:
        <ProductLine limit={4} data={topProducts}/>
        } */}
        {/* <Banner/> */}
        {isLoading ? <Spinner className='fs-2'></Spinner>
        :<ProductLine data={data}/>
        }
        
        {/* <Brands/> */}
    </Container>
  )
}

export default Home