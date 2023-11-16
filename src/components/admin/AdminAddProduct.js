import React, { useState } from 'react';
import { Button, Form, FormCheck } from 'react-bootstrap';
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { CirclePicker, SketchPicker } from 'react-color'
import  MultiImageInput  from 'react-multiple-image-input';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../redux/actions/productAction';
import { getAllCategories } from '../../redux/actions/categoryAction';
import { getAllBrands } from '../../redux/actions/brandAction';
import { getAllSubCategories } from '../../redux/actions/subCategoryAction';


const AdminAddProduct = () => {
    const token = localStorage.getItem("token")

    //variable inputs
    const title_input = useRef();
    const description_input = useRef();
    const price_after_input = useRef();
    const price_input = useRef();
    const [categoryId, setcategoryId] = useState("");
    const [subCategoriesId, setsubCategoriesId] = useState([]);
    const [brandId, setbrandId] = useState("");
    const [colors, setcolors] = useState([]);
    const [optionsCategory, setoptionsCategory] = useState([]);
    const [optionsSubCategory, setoptionsSubCategory] = useState([]);
    const [optionsbrand, setoptionsbrand] = useState([])

    //for color and image and not api
    const [newColor, setnewColor] = useState("#000");
    const crop = {unit: '%',aspect: 3 / 4,width: '100'};
    
    const [images, setImages] = useState({});
    const animatedComponents = makeAnimated();

    //api redux part
    const categories =useSelector(state => state.CategoryReducer.allCategories.data);
    const dispatch = useDispatch();
    const subCategories = useSelector(state=>state.SubCategoryReducer.allSubCategories.data);
    const productState = useSelector(state=>state.ProductReducer)
    const brands = useSelector(state => state.BrandReducer.allBrands.data)
    
      
    useEffect(() => {
      dispatch(getAllCategories("/api/v1/categories"))
      dispatch(getAllBrands("/api/v1/brands"))
    }, [])
    useEffect(() => {
      const optionss = []
      categories.forEach(category => {
        optionss.push({value:category._id , label : category.name});
      });
      setoptionsCategory(optionss)
    }, [categories])
    useEffect(() => {
      const optionss=[]
      brands.forEach(brand => {
        optionss.push({value:brand._id , label : brand.name});
      });
      setoptionsbrand(optionss)
    }, [brands])
    useEffect(() => {
      const optionss=[]
      subCategories.forEach(subcategory => {
        optionss.push({value:subcategory._id , label : subcategory.name});
      });
      setoptionsSubCategory(optionss)
    }, [subCategories])
    

      //hundle actions functions
      function hundleOnClickColor(e) {
        const colorstable = colors;
        colorstable[colorstable.length-1]=newColor;
        colorstable.push("#333");
        setcolors(colorstable)
        setnewColor("#333")
      }
      function hundleOnChangeColor(e) {
        setnewColor(e.target.value)
      }
      function hundleOnClickDeleteColor(index){
        const colorstable = colors.filter((item , i)=>i!=index);
        console.log(colorstable)
        setcolors(colorstable)
      }
      const hundleClickAdd = ()=>{
        dispatch({type:"ERROR PRODUCT"})
        const obj="";
        dispatch(createProduct("/api/v1/product",obj , token));
      }

      function hundleonChangeCategory(selected) {
        setcategoryId(selected.value)
        dispatch(getAllSubCategories(`/api/v1/categories/${selected.value}/subcategories`))
      }
  return (
    <div className=''>
      <h2 className='color-main mb-3'>Add New Product</h2>
        <MultiImageInput
      images={images}
      max={5}
      allowCrop={true}
      theme={{
        
        background: '#ffffff',
        outlineColor: '#aaaaaa',
        textColor: 'rgba(255,255,255,0.8)',
        buttonColor: '#338655',
        modalColor: '#111111'
      }}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
    />
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="product title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder='product description' rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="product price after discount" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="product price" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Quantity" />
            </Form.Group>
      <Select
        className='mt-3'
        closeMenuOnSelect={true}
        options={optionsCategory}
        onChange={hundleonChangeCategory}
        placeholder="Choose Category"
        />
      <Select
        className='mt-3'
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti
        placeholder="Choose subCategory"
        options={optionsSubCategory}
        />
        <Select
        className='mt-3'
        closeMenuOnSelect={true}
        placeholder="Choose brand"
        options={optionsbrand}
        />  
            <div class="gap-2 mt-3 d-flex" role="group" aria-label="Basic group">
              {colors.map((item , index) => {
                if(index == colors.length - 1){
                  return <label onClick={()=>hundleOnClickDeleteColor(index)} class="color-item rounded-circle" style={{backgroundColor:`${newColor}`}} for="btnradio4"></label>
                }
                return <label title='click to delete' onClick={()=>hundleOnClickDeleteColor(index)} class="color-item rounded-circle" style={{backgroundColor:`${item}`}} for="btnradio4"></label>
              })}
              

              <label  class=" color-item rounded-circle bg-white border border-gray border-3 d-flex justify-content-center" htmlFor="color-input">+</label>
              <Form.Control
                type="color"
                onClick={hundleOnClickColor}
                onChange={hundleOnChangeColor}
                style={{opacity:"0" ,width:0, marginLeft:"-30px"}}
                id="color-input"
                title="Choose your color"
              />
            </div>
            <div className='ms-auto w-50'>
    <Button className='mt-3 w-100  fw-semibold' variant='success' onClick={()=>{console.log(images)}}>ADD THE PRODUCT</Button>
    </div>

    </div>
  )
}

export default AdminAddProduct