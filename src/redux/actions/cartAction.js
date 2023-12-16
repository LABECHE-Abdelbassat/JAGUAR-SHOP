import { baseUrl } from "../../api/baseURL";

//all cart reducer
export const getcart = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            dispatch({type:"GET LOGGER USER CART",payload:data})
        } catch (error) {
            dispatch({type:"ERROR CART",payload:error})
        }
    }
}
//all Category reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
            dispatch({type:"ERROR CART"})
    }
}

//specific cart reducer
export const addProductToCart = (url,product,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,product,{headers});
            dispatch({type:"CREATE CART",payload:data})
        } catch (error) {
            dispatch({type:"ERROR CART",payload:""})
        }
        
    }
}
//specific cart reducer
export const getSpecificcart = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC CART",payload:data})
    }
}
//specific cart reducer
export const updatecart = (url,cart,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const {data} =await baseUrl.put(url,cart,{headers});
        dispatch({type:"UPDATE CART",payload:data})
    }
}
//specific cart reducer
export const deletecart = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE CART",payload:result})
    }
}