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

const Home = () => {
  let dataone=[1,1,1,1];
  let datatwo = [1,1,1,1,1,1,1,1]
  const topProducts = useSelector(state => state.ProductReducer.topProduct);
  const allProducts = useSelector(state=> state.ProductReducer.allProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts("/api/v1/products?page=1"))
    dispatch(getTopProducts("/api/v1/products"))
  }, [])
  
  return (
    <Container>
        <Slider/>
        <CategoriesModel/>
        <ProductLine limit={4} data={topProducts}/>
        <Banner/>
        <ProductLine data={allProducts}/>
        <Brands/>
    </Container>
  )
}

export default Home