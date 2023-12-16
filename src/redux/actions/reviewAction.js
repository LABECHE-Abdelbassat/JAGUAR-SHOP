import { baseUrl } from "../../api/baseURL";

//all Review reducer
export const getAllReviews = (url)=>{
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url);
            dispatch({type:"GET ALL REVIEWS",payload:data})
        } catch (error) {
            dispatch({type:"ERROR REVIEW",payload:""})
        }
    }
}
//all Category reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
            dispatch({type:"ERROR REVIEW"})
    }
}

//specific Review reducer
export const createReview = (url,Review,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,Review,{headers});
            dispatch({type:"CREATE REVIEW",payload:data})
        } catch (error) {
            dispatch({type:"ERROR REVIEW",payload:error})
        }
        
    }
}
//specific Review reducer
export const getSpecificReview = (url)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.get(url);
        dispatch({type:"GET SPECIFIC REVIEW",payload:data})
    }
}
//specific Review reducer
export const updateReview = (url,Review,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const {data} =await baseUrl.put(url,Review,{headers});
        dispatch({type:"UPDATE REVIEW",payload:data})
    }
}
//specific Review reducer
export const deleteReview = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE REVIEW",payload:result})
    }
}