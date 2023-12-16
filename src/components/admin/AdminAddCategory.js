import React, { useState } from 'react'
import { Button, Col, Form, Spinner } from 'react-bootstrap';
import { useRef } from 'react';
import galery from "../../images/galery.jpg"
import { useCreateCategoryMutation } from '../../reduxQuery/APIs/categoryApi';
import ErrorMessage from '../all/ErrorMessage';
import SuccessMessage from '../all/SuccessMessage';
const AdminAddCategory = () => {
  const [createCategory , {isLoading ,isError , data , isSuccess , error}] = useCreateCategoryMutation();
  

  const categoryName = useRef();
  
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
      const hundleClickAdd =async ()=>{
        const formData = new FormData();
        formData.append("name", categoryName.current.value);
        formData.append("image",img)
        
        await createCategory(formData)

      }
  return (
    <div className='add-brand position-relative'>
      {isSuccess ? <SuccessMessage message={"Category Created Successfully"}/>:""}
      {isError ? <ErrorMessage error={error}/> : ""}
      <h4 className='color-main'>Add Category</h4>
      <label className='my-3' style={{cursor:"pointer"}} htmlFor='img'>
        <img src={image} width={130}/>
      </label>
    <input id='img' style={{display:"none"}} type='file' onChange={hundleChange} ref={imageis}/>
    <Form.Group className='' as={Col} controlId="formGridPassword">
                <Form.Control ref={categoryName} type='text' placeholder="Category name" />
            </Form.Group>
    <Button onClick={hundleClickAdd} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Add Category
    {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
    
    </Button>
    </div>
  )
}

export default AdminAddCategory