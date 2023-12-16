import React, { useEffect } from 'react'
import { Button, Col, Form, Spinner } from 'react-bootstrap'
import Select from 'react-select'
import { useRef } from 'react';
import { useState } from 'react';
import { useGetAllCategoriesQuery } from '../../reduxQuery/APIs/categoryApi';
import { useCreateSubCategoryMutation } from '../../reduxQuery/APIs/subCategoryApi';
import SuccessMessage from '../all/SuccessMessage';
import ErrorMessage from '../all/ErrorMessage';

const AdminAddSubCategory = () => {
  const subCategoryName = useRef();
  const [categoryOf, setcategoryOf] = useState(null);

  const {data:categories} = useGetAllCategoriesQuery();
  const [createSubCategory , {isLoading,isError , error , isSuccess }]= useCreateSubCategoryMutation();

    const optionss = []
    const [options, setoptions] = useState([])

    function hundleonChange(selected) {
      setcategoryOf(selected.value)
    }
    const hundleClickAdd = async ()=>{
      const subCategoryObj = {
        name:subCategoryName.current.value,
        category : categoryOf
      }
      await createSubCategory(subCategoryObj)
    }
    
    useEffect(() => {
      categories?.data.forEach(category => {
        optionss.push({value:category._id , label : category.name});
      });
      setoptions(optionss)
    }, [categories])

    
  return (
    <div className='position-relative add-brand'>
      {isSuccess ? <SuccessMessage message={"Sub Category Created Successfully"}/>:""}
      {isError ? <ErrorMessage error={error}/> : ""}
      <h4 className='color-main'>Add SubCategory</h4>
      
    <Form.Group className='mt-3' as={Col}>
            <Form.Control ref={subCategoryName} type="text" placeholder="subCategory name" />
    </Form.Group>
    <Select
        className='mt-3'
        onChange={hundleonChange}
        closeMenuOnSelect={true}
        options={options}
        placeholder={"Select Category..."}
        />
    <Button onClick={hundleClickAdd} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Add SubCategory
    {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
    
    </Button>
    </div>
  )
}

export default AdminAddSubCategory