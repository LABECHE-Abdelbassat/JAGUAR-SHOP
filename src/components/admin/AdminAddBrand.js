import React, { useState } from 'react'
import { Button, Col, Form, Spinner } from 'react-bootstrap';
import AdminImageInput from './AdminImageInput';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, setTrue } from '../../redux/actions/categoryAction';
import galery from "../../images/galery.jpg"
import { createBrand } from './../../redux/actions/brandAction';
import { useCreateBrandMutation } from '../../reduxQuery/APIs/brandApi';
import SuccessMessage from '../all/SuccessMessage';
import ErrorMessage from '../all/ErrorMessage';

const AdminAddBrand = () => {
  const [createBrand , {isLoading ,isError , data , isSuccess , error}] = useCreateBrandMutation();

  const brandName = useRef();
  
  const [img, setimg] = useState(null)
  function hundleChange(event) {
    event.preventDefault();
    setimg(event.target.files[0])
    if(event.target.files[0]){
      setImage(URL.createObjectURL(event.target.files[0]))
    }
  }
  const imageis = useRef()
    const [image, setImage] = useState(galery);
      const hundleClickAdd = async ()=>{
        const formData = new FormData();
        formData.append("name", brandName.current.value);
        formData.append("image",img)
        await createBrand(formData);
      }
  return (
    <div className='position-relative add-brand'>
      {isSuccess ? <SuccessMessage message={"Brand Created Successfully"}/>:""}
      {isError ? <ErrorMessage error={error}/> : ""}
      <h4 className='color-main'>Add Brand</h4>
      <label className='my-3' style={{cursor:"pointer"}} htmlFor='img'>
        <img src={image} width={130}/>
      </label>
    <input id='img' style={{display:"none"}} type='file' onChange={hundleChange} ref={imageis}/>
    <Form.Group className='' as={Col} controlId="formGridPassword">
                <Form.Control ref={brandName} type="text" placeholder="Brand name" />
            </Form.Group>
            <Button onClick={hundleClickAdd} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Add Brand
              {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
            </Button>
    </div>
    
      
    
  )
}

export default AdminAddBrand