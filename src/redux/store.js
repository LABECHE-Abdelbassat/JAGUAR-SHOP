import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootReducer } from "./reducers/RootReducer";
const initailState = {}
const middelware = [thunk]
export const store = createStore(RootReducer,initailState,composeWithDevTools(applyMiddleware(thunk)))




