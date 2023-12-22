import React from 'react'
import AdminOrdersProductItem from './AdminOrdersProductItem'
import galery from "../../images/galery.jpg"
import { Card, Form, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useGetOrderQuery, useUpdateOrdertoDeliverMutation, useUpdateOrdertoPaidMutation } from '../../reduxQuery/APIs/orderApi'
import SuccessMessage from '../all/SuccessMessage'
import ErrorMessage from '../all/ErrorMessage'

const AdminOrderItem = () => {
  const id = useParams().id;
  const {data ,isError,error, isLoading} = useGetOrderQuery(id);
  const [updateOrderToPaid , {isSuccess:toPaidSuccess , isError:toPaidIsError , error:toPaidError}] = useUpdateOrdertoPaidMutation();
  const [updateOrderToDelivered , {isSuccess:toDeliveredSuccess , isError:toDeliveredIsError , error:toDeliveredError}] = useUpdateOrdertoDeliverMutation();

  async function hundleClickChange(e){
    if(e.target.value == 1){
      await updateOrderToDelivered(id)
    }else if(e.target.value == 2){
      await updateOrderToPaid(id)
    }
  }
  return (
    <div>
      <div style={{direction:"rtl"}}>
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
      <div style={{direction:"rtl"}}>
            {toPaidSuccess ? <SuccessMessage message={"Order Is Swich To paid Order Successfully"}/>:""}
            {toPaidIsError ? <ErrorMessage error={toPaidError}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
            {toDeliveredSuccess ? <SuccessMessage message={"Order Is Swich To delevered Order Successfully"}/>:""}
            {toDeliveredIsError ? <ErrorMessage error={toDeliveredError}/> : ""}
        </div>
        <h2 className='mb-3 color-main fw-semibold'>Order Details</h2>
        {isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>
        :<div>
          <div className='border border-1 mb-3 rounded-3 p-3 pt-0'>

            {data?.data?.cartItems.map((item , index)=>{
              return <AdminOrdersProductItem key={index} data={item} />
            })}
            </div>
            <div className='border border-1 mb-3 rounded-3 p-3'>
                <div className='mb-2'><strong>Name : </strong>{data?.data?.user?.name}</div>
                <div className='mb-2'><strong>Phone : </strong>{data?.data?.shippingAddress?.phone}</div>
                <div className='mb-2'><strong>Email : </strong>{data?.data?.user?.email}</div>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='fs-5 color-main'><strong>Total Price : {data?.data?.totalOrderPrice}$</strong></div>
                    <Form.Select onChange={hundleClickChange} className='mb-2' placeholder='option State' aria-label="Default select example">
                        <option>order State</option>
                        <option value="1">Paid</option>
                        <option value="2">Delivred</option>
                    </Form.Select>
                </div>
            </div>
          </div>}
        

    </div>
    
  )
}

export default AdminOrderItem