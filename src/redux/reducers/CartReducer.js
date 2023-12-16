const initialState = {
    cart:{data:[]},
    success: "",
    loading : false
}

export const cartReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "GET LOGGER USER CARTS":
            return {cart: {...payload}, loading : false}
        case "ADD PRODUCT TO CART":
            return {...state , success:"product added successfully to your cart" , loading:false}
        case "REMOVE PRODUCT FROM CART":
            return {...state , success:"product deleted successfully from your cart" , loading : false}
        case "CLEAR CART":
            return {...state , success:"cart cleared successfully" , loading : false}
        case "APPLY COUPON CART":
            return {...state , success:"coupon applyed successfully" , loading : false}
        case "ERROR CART":
            return {...state ,loading : true}
        default:
            return state;
    }
}