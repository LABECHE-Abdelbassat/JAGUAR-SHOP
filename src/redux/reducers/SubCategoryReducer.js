const initialState = {
    allSubCategories:{data:[]},
    success: "",
    loading : false
}

export const subCategoryReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET ALL SUBCATEGORIES":
            return {...state , allSubCategories: {...payload}, loading : false}
        case "CREATE SUBCATEGORY":
            return {...state , success:"sub-category created successfully" , loading:false}
        case "DELETE SUBCAETGORY":
            return {...state , success:"sub-caetgory deleted successfully" , loading : false}
        case "ERROR SUBCATEGORY":
            return {...state ,loading : true}
        default:
            return state;
    }
}