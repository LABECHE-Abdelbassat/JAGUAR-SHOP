import React, { useEffect } from 'react'
import { Button, Col, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { getAllCategories } from '../../redux/actions/categoryAction';
import { createSubCategory } from '../../redux/actions/subCategoryAction';
import { useRef } from 'react';
import { useState } from 'react';

const AdminAddSubCategory = () => {
  const subCategoryName = useRef();
  const [categoryOf, setcategoryOf] = useState(null)

    const categories =useSelector(state => state.CategoryReducer.allCategories.data);
    const dispatch = useDispatch();
    const subCategories = useSelector(state=>state.SubCategoryReducer);
    
    const optionss = []
    const [options, setoptions] = useState([])
    const token = localStorage.getItem("token")

    function hundleonChange(selected) {
      setcategoryOf(selected.value)
    }
    const hundleClickAdd = ()=>{
      dispatch({type:"ERROR SUBCATEGORY"})
      const subCategoryObj = {
        name:subCategoryName.current.value,
        category : categoryOf
      }
      dispatch(createSubCategory("/api/v1/subcategories",subCategoryObj , token));

    }
    
    useEffect(() => {
      dispatch(getAllCategories("/api/v1/categories"))
    }, [])
    useEffect(() => {
      categories.forEach(category => {
        optionss.push({value:category._id , label : category.name});
      });
      setoptions(optionss)
      console.log("9iiiiiiiwww")
    }, [categories])

    
  return (
    <div className='add-brand'>
      <h4 className='color-main'>Add Brand</h4>
      
    <Form.Group className='mt-3' as={Col} controlId="formGridPassword">
            <Form.Control ref={subCategoryName} type="text" placeholder="Coupon name" />
    </Form.Group>
    <Select
        className='mt-3'
        onChange={hundleonChange}
        closeMenuOnSelect={true}
        options={options}
        />
    <Button onClick={hundleClickAdd} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Add SubCategory
    {subCategories.loading === true ? <Spinner/>:""}
    
    </Button>
    </div>
  )
}

export default AdminAddSubCategory