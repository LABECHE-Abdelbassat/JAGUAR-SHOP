import React from 'react'
import OrdersProductItem from './OrdersProductItem'
import OrderItem from './OrderItem'
import { useGetAllOrdersQuery } from '../../reduxQuery/APIs/orderApi';
import ErrorMessage from '../all/ErrorMessage';
import { Spinner } from 'react-bootstrap';

const MyOrders = () => {

  const {data ,isError,error, isLoading} = useGetAllOrdersQuery();


  return (
    <div className='postion-relative'>
      <div style={{direction:"rtl"}}>
          {isError ? <ErrorMessage error={error}/> : ""}
      </div>
      {isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div> :
      <div>
      {data?.data?.map((item,index)=>{
        return <OrderItem data={item} index={index + 1} key={index} />
      })}
    </div>}
      
        
    </div>
  )
}

export default MyOrders