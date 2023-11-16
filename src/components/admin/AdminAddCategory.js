import React, { useState } from 'react'
import { Button, Col, Form, Spinner } from 'react-bootstrap';
import AdminImageInput from './AdminImageInput';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, setTrue } from '../../redux/actions/categoryAction';
import galery from "../../images/galery.jpg"
const AdminAddCategory = () => {
  const category = useSelector(state => state.CategoryReducer);

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
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
    const [image, setImage] = useState(galery);
    const crop = {
        unit: '%',
        aspect: 4 / 3,
        width: '100'
      };
      const hundleClickAdd = ()=>{
        dispatch({type:"ERROR CATEGORY"})
        const formData = new FormData();
        formData.append("name", categoryName.current.value);
        formData.append("image",img)
        dispatch(createCategory("/api/v1/categories",formData , token));

      }
  return (
    <div className='add-brand'>
      <h4 className='color-main'>Add Category</h4>
      <label className='my-3' style={{cursor:"pointer"}} htmlFor='img'>
        <img src={image} width={130}/>
      </label>
    <input id='img' style={{display:"none"}} type='file' onChange={hundleChange} ref={imageis}/>
    <Form.Group className='' as={Col} controlId="formGridPassword">
                <Form.Control ref={categoryName} type='text' placeholder="Category name" />
            </Form.Group>
    <Button onClick={hundleClickAdd} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Add Category
    {category.loading === true ? <Spinner/>:""}
    
    </Button>
    </div>
  )
}

export default AdminAddCategory