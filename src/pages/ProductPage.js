import React from 'react'
import ProductImages from '../components/product-page/ProductImages'
import ProductInfo from '../components/product-page/ProductInfo'
import Container from 'react-bootstrap/esm/Container'
import RatingSection from '../components/product-page/RatingSection'
import ProductLine from '../components/home/ProductLine'

const ProductPage = () => {
  let datatwo = [1,1,1,1,1,1,1,1]
  return (
    <Container>
        <div className='row'>
            <div className='col-12 col-md-5 col-lg-6 col-xl-5'>
                <ProductImages/>
            </div>
            <div className='col-12 col-md-7 col-lg-6 col-xl-7 mt-3 mt-sm-0'>
                <ProductInfo/>
            </div>
        </div>
        <RatingSection/>
        <ProductLine data={datatwo}/>
    </Container>
  )
}

export default ProductPage