import { baseUrl } from "../../api/baseURL";

//all SubCategory reducer
export const getAllSubCategories = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            dispatch({type:"GET ALL SUBCATEGORIES",payload:data})
        } catch (error) {
            dispatch({type:"ERROR SUBCATEGORY",payload:""})
        }
    }
}
//specific SubCategory reducer
export const createSubCategory = (url,SubCategory,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
      return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,SubCategory,{headers});
        dispatch({type:"CREATE SUBCATEGORY",payload:data})
        } catch (error) {
            dispatch({type:"ERROR SUBCATEGORY",payload:""})
        }
    }
}


//all Category reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
            dispatch({type:"ERROR SUBCATEGORY"})
    }
}




//specific SubCategory reducer
export const getSpecificSubCategory = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC SUBCATEGORY",payload:data})
    }
}
//specific SubCategory reducer
export const updateSubCategory = (url,SubCategory,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const {data} =await baseUrl.put(url,SubCategory,{headers});
        dispatch({type:"UPDATE SUBCATEGORY",payload:data})
    }
}

//specific SubCategory reducer
export const deleteSubCategory = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE SUBCATEGORY",payload:result})
    }
}





