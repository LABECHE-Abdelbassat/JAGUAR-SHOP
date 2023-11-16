const initialState = {
    allCategories:{data:[]},
    success: "",
    loading : false
}

export const categoryReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET ALL CATEGORIES":
            return {allCategories: {...payload}, loading : false}
        case "CREATE CATEGORY":
            return {...state , success:"category created successfully" , loading:false}
        case "DELETE CAETGORY":
            return {...state , success:"category deleted successfully" , loading : false}
        case "ERROR CATEGORY":
            return {...state ,loading : true}
        default:
            return state;
    }
}