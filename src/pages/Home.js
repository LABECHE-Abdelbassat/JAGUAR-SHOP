import React from 'react'
import Slider from '../components/home/Slider'
import Categories from '../components/home/Categories'
import ProductLine from '../components/home/ProductLine'
import Banner from '../components/home/Banner'
import Brands from '../components/home/Brands'
import Footer from '../components/all/Footer'
import TheNav from '../components/all/TheNav'
import StartReview from '../components/all/StartReview'
import Container from 'react-bootstrap/esm/Container'

const Home = () => {
  let dataone=[1,1,1,1];
  let datatwo = [1,1,1,1,1,1,1,1]
  return (
    <Container>
        <Slider/>
        <Categories/>
        <ProductLine data={dataone}/>
        <Banner/>
        <ProductLine data={datatwo}/>
        <Brands/>
    </Container>
  )
}

export default Home