import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import galery from "../../images/galery.jpg"
import { useDeleteCategoryMutation, useGetAllCategoriesQuery, useGetCategoryQuery, useUpdateCategoryMutation } from '../../reduxQuery/APIs/categoryApi';
import { useDeleteSubCategoryMutation, useGetAllSubCategoriesOnCategoryQuery, useGetSubCategoryQuery, useUpdateSubCategoryMutation } from '../../reduxQuery/APIs/subCategoryApi';
import SuccessMessage from '../../components/all/SuccessMessage';
import ErrorMessage from '../../components/all/ErrorMessage';
import { useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select'

const AdminUpdateSubcategoryPage = () => {
    const id = useParams().id;
    const navigate = useNavigate();
    const subCategoryName = useRef();
    const catinput = useRef();
    const [categoryOf, setcategoryOf] = useState(null);
  
    const {data:categories} = useGetAllCategoriesQuery();
    const [updateSubCategory , {isLoading,isError , error , isSuccess }]= useUpdateSubCategoryMutation();  
    const [deleteSubCategory , {isError:deleteIsError , isSuccess:deleteSuccess ,isLoading : deleteLoading, error:deleteError}] = useDeleteSubCategoryMutation();
    const {data:itemData ,isError:itemIsError,error:itemError, isLoading:itemLoading} = useGetSubCategoryQuery(id);
    
    const optionss = []
    const [options, setoptions] = useState([])

    function hundleonChange(selected) {
      setcategoryOf(selected.value)
    }
    const hundleClickUpdate = async ()=>{
      const subCategoryObj = {
        name:subCategoryName.current.value,
        category : categoryOf
      }
      await updateSubCategory({id:id , subCategory : subCategoryObj })
    }
    
    useEffect(() => {
      categories?.data.forEach(category => {
        optionss.push({value:category._id , label : category.name});
      });
      setoptions(optionss)
    }, [categories])

    useEffect(() => {
      if(isSuccess){
        subCategoryName.current.value="";
        catinput.current.setValue([]);
      }
    }, [isSuccess])





        useEffect(() => {
          subCategoryName.current.value = (itemData?.data?.name)
          catinput.current.setValue({value : itemData?.data?.category?._id , label : itemData?.data?.category?.name})
          setcategoryOf(itemData?.data?.category?._id)
        }, [itemData])
        
  
        async function hundleClickDeleteSubCategory(){
          await deleteSubCategory(id)
        }
        useEffect(() => {
            if(deleteSuccess){
                navigate('/admin/subcategories')
            }
          }, [deleteSuccess])

        







  return (
    <Container>
        <div className='position-relative add-brand'>
        <div style={{direction:"rtl"}}>
            {isSuccess ? <SuccessMessage message={"Sub Category Updated Successfully"}/>:""}
            {isError ? <ErrorMessage error={error}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
            {itemIsError ? <ErrorMessage error={itemError}/> : ""}
        </div>
        <div style={{direction:"rtl"}}>
            {deleteIsError ? <ErrorMessage error={deleteError}/> : ""}
        </div>

      <h4 className='color-main'>SubCategory Information</h4>
      
    <Form.Group className='mt-3' as={Col}>
            <Form.Control ref={subCategoryName} type="text" placeholder="subCategory name" />
    </Form.Group>
    <Select
        className='mt-3'
        ref={catinput}
        onChange={hundleonChange}
        closeMenuOnSelect={true}
        options={options}
        placeholder={"Select Category..."}
        />
    <Button onClick={hundleClickUpdate} variant='success' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Update SubCategory
    {isLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
    
    </Button>
    <Button onClick={hundleClickDeleteSubCategory} variant='dark' className='w-100 d-flex align-items-center gap-3 justify-content-center mt-3'>Delete This SubCategory
    {deleteLoading ? <Spinner size='sm' className='ms-3'></Spinner> : ""}
    
    </Button>
    
    </div>
    </Container>
  )
}

export default AdminUpdateSubcategoryPage