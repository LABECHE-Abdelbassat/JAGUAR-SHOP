import {combineReducers} from "redux"
import { productReducer } from "./ProductReducer"



export const RootReducer = combineReducers({
    ProductReducer : productReducer,

})