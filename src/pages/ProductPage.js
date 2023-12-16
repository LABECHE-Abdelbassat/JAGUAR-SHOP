import React from 'react'
import ProductImages from '../components/product-page/ProductImages'
import ProductInfo from '../components/product-page/ProductInfo'
import Container from 'react-bootstrap/esm/Container'
import RatingSection from '../components/product-page/RatingSection'
import ProductLine from '../components/home/ProductLine'
import { getSpecificProduct } from '../redux/actions/productAction'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ProductDetailedHook from './../hooks/productDetailedHook';

const ProductPage = () => {
  let datatwo = {data:[1,1,1,1,1,1,1,1]}
  const params = useParams();
 const product = ProductDetailedHook(params.id);
  
  return (
    <Container>
        <div className='row'>
            <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
                <ProductImages img={product.imageCover}/>
            </div>
            <div className='col-12 col-md-6 col-lg-7 col-xl-8 mt-3 mt-sm-0'>
                <ProductInfo product={product}/>
            </div>
        </div>
        <RatingSection id={product._id}/>
        <ProductLine data={datatwo}/>
    </Container>
  )
}

export default ProductPage