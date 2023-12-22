import React, { useEffect, useState } from 'react'
import { Button, Form, FormControl, FormGroup, FormSelect, Modal, Spinner } from 'react-bootstrap';
import { useCreateCashOrderMutation } from '../../reduxQuery/APIs/orderApi';
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from '../all/ErrorMessage';
import { useGetAllUserAddressesQuery } from '../../reduxQuery/APIs/addressApi';

function CheckOutModel(props) {
    const navigation = useNavigate();
    const [address, setAddress] = useState({})
    const {data , isLoading ,error, isError } = useGetAllUserAddressesQuery();

    const [createCashOrder , {isLoading:cashOrderLoading , isError:cashOrderIsError , isSuccess:cashOrderIsSuccess , error:cashOrderError}] = useCreateCashOrderMutation();


    async function hundleClickCheckOut(){
        if(data?.data?.length<1){
            return alert('please enter address')
        }
        const addressObj = data?.data?.filter((item , index)=>{
            return item?.alias == address
        })

        const checkOutObj = {
            shippingAddress : addressObj[0]
        }
        await createCashOrder({checkOutObj , id : props.id})
    }
    
    
    useEffect(() => {
      if(cashOrderIsSuccess){
        props.onHide();
        navigation("/user/orders" , {preventScrollReset:true, replace:true})
      }
    }, [cashOrderIsSuccess])
    
    function hundleClickChange(e){
        setAddress(e.target.value)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{direction:"rtl"}}>
          {cashOrderIsError ? <ErrorMessage error={cashOrderError}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
          {isError ? <ErrorMessage error={error}/> : ""}
        </div>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            {
                isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div> 
                :<div>
                    {data?.data?.length > 0 ? data?.data?.map((item , index)=>{
                        return (
                            <Form.Check key={index}>
                                <Form.Check.Input onChange={hundleClickChange} value={item?.alias} name={'address'} id={"btnradio"+index} type={'radio'} />
                                <Form.Check.Label htmlFor={"btnradio"+index}>{item.alias}</Form.Check.Label>
                            </Form.Check>
                        )
                    }) : 
                    <div>
                        <h6 className='fw-semibold text-black'>you don't have any address to select</h6>
                        <Link to={'/user/addresses'} className='btn btn-success mt-2 color-main text-white' style={{textDecoration:'none'}}>Create Address</Link>
                    </div>}
                </div>
            }
            
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='success' onClick={hundleClickCheckOut}>Check Out
            {cashOrderLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
          </Button>
          
        </Modal.Footer>
      </Modal>
    );
  }
export default CheckOutModel