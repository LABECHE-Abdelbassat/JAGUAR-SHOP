import { baseUrl } from "../../api/baseURL";

//all Category reducer
export const getAllCategories = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            dispatch({type:"GET ALL CATEGORIES",payload:data})
        } catch (error) {
            dispatch({type:"ERROR CATEGORY",payload:""})
        }
    }
}
//all Category reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
            dispatch({type:"ERROR CATEGORY"})
    }
}
//specific Category reducer
export const createCategory = (url,Category,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
      
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,Category,{headers});
            dispatch({type:"CREATE CATEGORY",payload:data})
        } catch (error) {
            dispatch({type:"ERROR CATEGORY",payload:""})
        }
    }
}
//specific Category reducer
export const getSpecificCategory = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC CATEGORY",payload:data})
    }
}
//specific Category reducer
export const updateCategory = (url,Category,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const {data} =await baseUrl.put(url,Category,{headers});
        dispatch({type:"UPDATE CATEGORY",payload:data})
    }
}
//specific Category reducer
export const deleteCategory = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE CATEGORY",payload:result})
    }
}