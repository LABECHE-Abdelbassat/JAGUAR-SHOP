
const initialState = {
  allProduct:{data:[]},
  topProduct:{data:[]},
  specificProduct:{data:{}},
  succsess:"",
  loading:true};

export const productReducer =  (state = initialState, { type, payload }) => {
  switch (type) {

  case "GET ALL PRODUCTS":
    return {  ...state , allProduct : {...payload} ,loading:false}

  case "GET TOP PRODUCTS":
    return { ...state , topProduct : {...payload} ,loading:false }
  
  case "GET SPECIFIC PRODUCT":
      return {...state , specificProduct : {...payload} , loading : false}
  
  case "CREATE PRODUCT":
      return {...state , succsess:"product is created successfully" , loading : false}
  
  case "ERROR PRODUCT":
      return {...state , loading : true}
  
  default:
    return state
  }
}

// const initialState = {results:0,paaginationResult:{currentPage:1,limit:50,numberOfPages:0},data:[],loading:true};

// export const productReducer =  (state = initialState, { type, payload }) => {
//   switch (type) {

//   case "GET ALL PRODUCTS":
//     return { ...payload ,loading:true}

//   default:
//     return state
//   }
// }

// export const topProductReducer =  (state = initialState, { type, payload }) => {
//     switch (type) {
  
//     case "GET TOP PRODUCTS":
//       return { ...payload ,loading:true }
  
//     default:
//       return state
//     }
//   }

// const initialStateProduct = {data : null , loading:true };

// export const specificProductReducer = (state = initialStateProduct,{type , payload})=>{
//   switch (type) {
//     case "GET SPECIFIC PRODUCT":
//       return {...payload , loading : false}
  
//     default:
//       return {...state}
//   }
// }

