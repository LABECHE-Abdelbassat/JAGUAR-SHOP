import { baseUrl } from "../../api/baseURL";

//specific Brand reducer
export const signUp = (url,user)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.post(url,user);
        dispatch({type:"SIGN UP",payload:data})
    }
}
//specific Brand reducer
export const logIn = (url,user)=>{
    return async (dispatch)=>{
        const {data} =await baseUrl.post(url,user);
        dispatch({type:"LOG IN",payload:data})
    }
}