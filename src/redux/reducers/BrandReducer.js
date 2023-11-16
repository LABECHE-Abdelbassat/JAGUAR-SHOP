const initialState = {
    allBrands:{data:[]},
    success: "",
    loading : false
}

export const brandReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET ALL BRANDS":
            return {allBrands: {...payload}, loading : false}
        case "CREATE BRAND":
            return {...state , success:"brand created successfully" , loading:false}
        case "DELETE BRAND":
            return {...state , success:"brand deleted successfully" , loading : false}
        case "ERROR BRAND":
            return {...state ,loading : true}
        default:
            return state;
    }
}