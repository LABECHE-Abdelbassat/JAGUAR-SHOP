const initialState = {
    wishList:{data:[]},
    success: "",
    loading : true
}

export const wishlistReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET ALL WISHLIST PRODUCTS":
            return {wishList: {...payload}, loading : false}
        case "ADD TO WISHLIST":
            return {...state , success:"product added successfully from wishlist" , loading:false}
        case "DELETE FROM WISHLIST":
            return {...state , success:"product deleted successfully from wishlist" , loading : false}
        case "ERROR WISHLIST":
            return {...state ,loading : false}
        default:
            return state;
    }
}