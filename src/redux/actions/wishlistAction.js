import { baseUrl } from "../../api/baseURL";

//all WishListProduct reducer
export const getAllWishListProducts = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.get(url , {headers});
            dispatch({type:"GET ALL WISHLIST PRODUCTS",payload:data})
        } catch (error) {
            dispatch({type:"ERROR WISHLIST",payload:""})
        }
    }
}
//wishlist reducer
export const setTrue = ()=>{
    return async (dispatch)=>{
        dispatch({type:"ERROR WISHLIST"})
    }
}

//specific WishListProduct reducer
export const createWishListProduct = (url,productId,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        try {
            const {data} =await baseUrl.post(url,productId,{headers});
            dispatch({type:"ADD TO WISHLIST",payload:data})
        } catch (error) {
            dispatch({type:"ERROR WISHLIST",payload:""})
        }
        
    }
}
//specific WishListProduct reducer
export const deleteWishListProduct = (url,token)=>{
    const headers = {
        'Authorization': `Bearer ${token}`
      };
    return async (dispatch)=>{
        const result = await baseUrl.delete(url,{headers});
        dispatch({type:"DELETE FROM WISHLIST",payload:result})
    }
}