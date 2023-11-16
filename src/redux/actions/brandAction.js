import { baseUrl } from "../../api/baseURL";

//all Brand reducer
export const getAllBrands = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            dispatch({type:"GET ALL BRANDS",payload:data})
        } catch (error) {
            dispatch({type:"ERROR BRAND",payload:""})
        }
    }
}
//all Category reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
            dispatch({type:"ERROR BRAND"})
    }
}

//specific Brand reducer
export const createBrand = (url,Brand,token)=>{
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,Brand,{headers});
            dispatch({type:"CREATE BRAND",payload:data})
        } catch (error) {
            dispatch({type:"ERROR BRAND",payload:""})
        }
        
    }
}
//specific Brand reducer
export const getSpecificBrand = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC BRAND",payload:data})
    }
}
//specific Brand reducer
export const updateBrand = (url,Brand,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const {data} =await baseUrl.put(url,Brand,{headers});
        dispatch({type:"UPDATE BRAND",payload:data})
    }
}
//specific Brand reducer
export const deleteBrand = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE BRAND",payload:result})
    }
}