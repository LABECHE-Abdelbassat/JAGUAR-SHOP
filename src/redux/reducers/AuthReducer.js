const initialState = {
    userInfo:{data:{},token:""},
    loading : true};

export const authReducer = (state = initialState , {type , payload})=>{
    switch (type) {
        case "SIGN UP":
            return {userInfo:{...payload }, loading : false}
    
        case "LOG IN":
            return {userInfo:{...payload } , loading : false}
    
        default:
            return state;
    }
}