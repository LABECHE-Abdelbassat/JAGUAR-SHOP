import axios from "axios"

export const productAction = (url)=>{
    return async (dispatch){
        const {data} =await axios.get(url);
        dispatch({type:"GET ALL",payload:{results:data.results,paaginationResult:{currentPage:data.paaginationResult.currentPage,limit:data.paaginationResult.limit,numberOfPages:data.paaginationResult.numberOfPages},data:data.data}})
    }
}