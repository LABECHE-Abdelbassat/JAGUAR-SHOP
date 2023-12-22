import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import ProductItemDetailed from '../components/all/ProductItemDetailed'
import Summary from '../components/cart-page/Summary'
import { useGetUserCartQuery } from '../reduxQuery/APIs/cartApi'
import ErrorMessage from '../components/all/ErrorMessage'

const CartPage = () => {
    const {data ,isLoading , isError , isSuccess , error} = useGetUserCartQuery();
  return (
    <Container className='position-relative'>
      {error?.data?.message?.startsWith("There is no cart for this user") ? "":
      <div style={{direction:"rtl"}}>
      {isError ? <ErrorMessage error={error}/> : ""}
  </div>
      }
      
        <div className='d-flex my-0 align-items-center'>
        <div className='text-main m-0 p-0 fw-semibold fs-4'>SHOPING CART</div>
        <div className='flex-fill line mx-3'></div>
      </div>
      <div className='row'>
        {isLoading? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>
        :<div className='col-12 order-2 order-lg-1 col-lg-8 col-xxl-9'>
          {error?.data?.message?.startsWith("There is no cart for this user") ? <div className='m-auto d-flex justefy-content-center mt-4'><h3 className='m-auto'>Cart is Empty</h3></div>
          :data?.data?.cartItems?.map((item,index)=>{
            return <ProductItemDetailed key={index} item={item}/>
          })
          }
        
      </div>}
        <div className='col-12 order-1 order-lg-2 col-lg-4 col-xxl-3'><Summary data={data?.data}/></div>
      </div>
    </Container>
  )
}

export default CartPage