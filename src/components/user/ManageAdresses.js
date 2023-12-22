import React, { useEffect, useRef } from 'react'
import { Button, Card, CloseButton, Form, Spinner } from 'react-bootstrap'
import { useAddAddressMutation, useDeleteAddressMutation, useGetAllUserAddressesQuery } from '../../reduxQuery/APIs/addressApi';
import ErrorMessage from '../all/ErrorMessage';
import SuccessMessage from '../all/SuccessMessage';

const ManageAdresses = () => {
    const [addAddress , {isLoading , isError , isSuccess , error}] = useAddAddressMutation();
    const {data ,isError:listIsError,error:listError, isLoading:listLoading} = useGetAllUserAddressesQuery();
    const [deleteAddress , {isSuccess:deleteSuccess , isError:deleteIsError , error:deleteError}] = useDeleteAddressMutation();

    const alias_input = useRef();
    const details_input = useRef();
    const phone_input = useRef();
    const city_input = useRef();
    const postal_input = useRef();


    async function hundleClickAddAddress(e) {
        e.preventDefault();
        const addressObj = {
            alias:alias_input.current.value,
            details:details_input.current.value,
            phone:phone_input.current.value,
            city:city_input.current.value,
            postalCode:postal_input.current.value,
        }
        await addAddress(addressObj);
    }
    useEffect(() => {
      if(isSuccess){
        alias_input.current.value = "";
        details_input.current.value = "";
        phone_input.current.value = "##";
        city_input.current.value = "";
        postal_input.current.value = "";
      }
    }, [isSuccess])
    
    async function hundleClickDeleteAddress(id){
        await deleteAddress(id);
    }
  return (
    <div className='position-relative'>
        <div style={{direction:"rtl"}}>
            {isSuccess ? <SuccessMessage message={"Address Created Successfully"}/>:""}
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
            {deleteSuccess ? <SuccessMessage message={"Address Deleted Successfully"}/>:""}
            {deleteIsError ? <ErrorMessage error={deleteError}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
            {listIsError ? <ErrorMessage error={listError}/> : ""}
        </div>
        <h2 className='color-main fw-semibold'>Add New Address</h2>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Alias</Form.Label>
                <Form.Control ref={alias_input} type="text" placeholder="home " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detailed Address</Form.Label>
                <Form.Control ref={details_input} as="textarea" placeholder='Algeria - tiaret - rahouia - 4' rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control ref={phone_input} type="text" placeholder="0652....." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>City</Form.Label>
                <Form.Control ref={city_input} type="text" placeholder="0652....." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control ref={postal_input} type="text" placeholder="0652....." />
            </Form.Group>
            <Button onClick={hundleClickAddAddress} variant="success" className='w-100' type="submit">
                Add Address
                {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
            </Button>
        </Form>
        <h2 className='color-main mt-3 fw-semibold'>Your Addresses</h2>
        {listLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>  :
                <div>
                    {data?.data.map((item, index)=>{
                        return <Card key={index} className='mt-3'>
                            <Card.Body className='d-flex justify-content-between'>
                                <div><strong>Alias : </strong>{item.city}</div>
                                <CloseButton onClick={()=>hundleClickDeleteAddress(item._id)}></CloseButton>
                            </Card.Body>
                            <Card.Body><strong>Detailed Address : </strong>{item.details}</Card.Body>
                            <Card.Body><strong>Phone Number : </strong>{item.phone}</Card.Body>
                            <Card.Body><strong>City : </strong>{item.city}</Card.Body>
                            <Card.Body><strong>Postal Code : </strong>{item.postalCode}</Card.Body>
                        </Card>
                    })}
                </div>
            }

    </div>
  )
}

export default ManageAdresses