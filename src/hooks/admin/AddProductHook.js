import { useState } from 'react';
import makeAnimated from 'react-select/animated'
import { useRef, useEffect } from 'react';
import { useGetAllCategoriesQuery } from '../../reduxQuery/APIs/categoryApi';
import { useGetAllSubCategoriesOnCategoryQuery } from '../../reduxQuery/APIs/subCategoryApi';
import { useGetAllBrandsQuery } from '../../reduxQuery/APIs/brandApi';
import { useCreateProductMutation } from '../../reduxQuery/APIs/productApi';

const AddProductHook = () => {
      //variable inputs===========================================================================
    const subcatinput = useRef();
    const catinput=useRef();
    const brandinput=useRef();
    const title_input = useRef();
    const description_input = useRef();
    const price_after_input = useRef();
    const price_input = useRef();
    const quantity_input =useRef();
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
    const {data:categories} = useGetAllCategoriesQuery();
    const {data:subCategories}=useGetAllSubCategoriesOnCategoryQuery(categoryId);
    const {data:brands}=useGetAllBrandsQuery();
    const [createProduct , {isLoading , isError ,error , isSuccess}] = useCreateProductMutation();

    //use Effects for the select inputs==============================================================
    useEffect(() => {
      const optionss = []
      categories?.data.forEach(category => {
        optionss.push({value:category._id , label : category.name});
      });
      setoptionsCategory(optionss)
    }, [categories])
    useEffect(() => {
      const optionss=[]
      brands?.data.forEach(brand => {
        optionss.push({value:brand._id , label : brand.name});
      });
      setoptionsbrand(optionss)
    }, [brands])
    useEffect(() => {
      const optionss=[]
      subCategories?.data.forEach(subcategory => {
        optionss.push({value:subcategory._id , label : subcategory.name});
      });
      setoptionsSubCategory(optionss)
    }, [subCategories])

    //convert image from base64
    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[arr.length - 1]), 
          n = bstr.length, 
          u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    }

      //hundle actions functions=======================================================================
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
        if(index == (colors.length - 1)){
          const colorstable = colors.filter((item , i)=>i!=(index));
          setnewColor(colorstable[colorstable.length-1])
          setcolors(colorstable)
        }else{
          const colorstable = colors.filter((item , i)=>i!=(index));
          setcolors(colorstable)
        }
      }
      const hundleClickAdd =async ()=>{
        const formData = new FormData();
        formData.append("title" , title_input.current.value);
        //Usage example:
        try {
          var imageCover = dataURLtoFile(images[0],'image');
          formData.append("imageCover" , imageCover);
          for (let i = 0; i < Object.keys(images).length; i++) {
            const element = images[i];
            let imageConvert =  dataURLtoFile(element,'image');
            formData.append("images" , imageConvert);
          }
        } catch (error) {
          return console.log("you should enter an image")
        }
        
        formData.append("category" , categoryId);
        formData.append("description" , description_input.current.value);
        formData.append("quantity" , quantity_input.current.value);
        formData.append("price" , price_input.current.value);
        subCategoriesId.forEach(item => {
          formData.append("subcategories",item.value)
        })
        colors.forEach(item => {
          formData.append("colors",item)
        })
        formData.append("brand" , brandId)


        await createProduct(formData);

          

      }
      //clear the data after the success of addition
      useEffect(() => {
          if(isSuccess){
            title_input.current.value="";
            description_input.current.value="";
            price_after_input.current.value="";
            price_input.current.value="";
            quantity_input.current.value="";
            setImages({});
            subcatinput.current.clearValue();
            catinput.current.setValue([]);
            brandinput.current.setValue([]);
            setcolors([]);
          }
      }, [isSuccess])
      //select input funcitons
      function hundleonChangeCategory(selected) {
        setcategoryId(selected.value);
        subcatinput.current.clearValue();
      }
      function hundleonChangeSubCategories(selected) {
        setsubCategoriesId(selected)
      }
      function hundleOnChangeBrand(selected){
        setbrandId(selected.value)
      }

      return [isSuccess , isError , error , images , setImages , crop , title_input , description_input , price_after_input , price_input , quantity_input,optionsCategory,catinput,hundleonChangeCategory,animatedComponents,hundleonChangeSubCategories,subcatinput,optionsSubCategory,brandinput,hundleOnChangeBrand,optionsbrand,colors,hundleOnClickDeleteColor,hundleOnClickColor,hundleOnChangeColor,hundleClickAdd,isLoading,newColor]
}

export default AddProductHook