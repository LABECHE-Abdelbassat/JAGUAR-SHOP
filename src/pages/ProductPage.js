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
import { useGetAllProductsQuery, useGetProductQuery } from '../reduxQuery/APIs/productApi'
import SuccessMessage from '../components/all/SuccessMessage'
import ErrorMessage from '../components/all/ErrorMessage'
import { Spinner } from 'react-bootstrap'

const ProductPage = () => {
  const params = useParams();
 const {data , isLoading  , isError ,error} = useGetProductQuery(params.id);
 setTimeout(() => {
  
 }, 2000);
 const {data:list ,isError:listIsError,error:listError, isLoading:listLoading} = useGetAllProductsQuery(`?page=${1}&category=${data?.data?.category?._id}`);

 const similarlist = {data:list?.data?.filter((item)=>item._id !== data?.data?._id)}

  return (
    <Container className='position-relative'>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
      </div>
      <div style={{direction:"rtl"}}>
            {listIsError ? <ErrorMessage error={listError}/> : ""}
      </div>
      {isLoading? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>
      :<div className='row'>
            <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
                <ProductImages imgs={[].concat(data?.data?.images)}/>
            </div>
            <div className='col-12 col-md-6 col-lg-7 col-xl-8 mt-3 mt-sm-0'>
                <ProductInfo product={data?.data}/>
            </div>
        </div>
      }
        
        <RatingSection product={data?.data}/>
        {listLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div> :
        <ProductLine limit={8} data={similarlist} />
        }
        
    </Container>
  )
}

export default ProductPage