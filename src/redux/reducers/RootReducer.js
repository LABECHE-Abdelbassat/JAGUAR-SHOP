import {combineReducers} from "redux"
import { productReducer } from "./ProductReducer"
import { categoryReducer } from "./CategoryReducer"
import { brandReducer } from "./BrandReducer"
import { authReducer } from "./AuthReducer"
import { subCategoryReducer } from "./SubCategoryReducer"



export const RootReducer = combineReducers({
    ProductReducer : productReducer,
    CategoryReducer : categoryReducer,
    SubCategoryReducer : subCategoryReducer,
    BrandReducer : brandReducer,
    AuthReducer : authReducer,

})