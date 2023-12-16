import axios from "axios"
import { baseUrl } from "../../api/baseURL";

//all product reducer
export const getAllProducts = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            console.log(data)
        dispatch({type:"GET ALL PRODUCTS",payload:data})
        } catch (error) {
            dispatch({type:"ERROR PRODUCT" ,payload:error})
        }
    }
}
//top product reducer
export const getTopProducts = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET TOP PRODUCTS",payload:data})
    }
}

//specific product reducer
export const createProduct = (url,product,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,product,{headers});
            dispatch({type:"CREATE PRODUCT",payload:data})
        } catch (error) {
            dispatch({type:"ERROR PRODUCT",payload:error})
        }
    }
}
//specific product reducer
export const getSpecificProduct = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC PRODUCT",payload:data})
    }
}
//specific product reducer
export const updateProduct = (url,product,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.put(url,product,{headers});
        dispatch({type:"UPDATE PRODUCT",payload:data})
        } catch (error) {
            dispatch({type:"ERROR PRODUCT", payload:error})
        }
    }
}

//specific product reducer
export const deleteProduct = (url,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE PRODUCT",payload:result})
        } catch (error) {
            dispatch({type:"ERROR PRODUCT", payload:error});
        }
    }
}
