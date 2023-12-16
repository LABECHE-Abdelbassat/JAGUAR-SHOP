const initialState = {
    allReviews:{data:[]},
    success: "",
    loading : false,
    error:null,
}

export const reviewReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET ALL REVIEWS":
            return {allReviews: {...payload}, loading : false}
        case "CREATE REVIEW":
            return {...state ,error:{...payload}, success:"review created successfully" , loading:false}
        case "DELETE REVIEW":
            return {...state , success:"review deleted successfully" , loading : false}
        case "ERROR REVIEW":
            return {...state ,loading : true}
        default:
            return state;
    }
}