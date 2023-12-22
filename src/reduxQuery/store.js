import {configureStore} from "@reduxjs/toolkit";
import { productApi } from "./APIs/productApi.js";
import { categoryApi } from "./APIs/categoryApi.js";
import { subCategoryApi } from "./APIs/subCategoryApi.js";
import { brandApi } from "./APIs/brandApi.js";
import { userApi } from "./APIs/userApi.js";
import { authApi } from "./APIs/authApi.js";
import { loggedUserApi } from "./APIs/loggedUserApi.js";
import { reviewApi } from "./APIs/reviewApi.js";
import { wishlistApi } from "./APIs/wishlistApi.js";
import { addressApi } from "./APIs/addressApi.js";
import { couponApi } from "./APIs/couponApi.js";
import { cartApi } from "./APIs/cartApi.js";
import { orderApi } from "./APIs/orderApi.js";
import { baseApi } from "./APIs/baseApi.js";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [reviewApi.reducerPath]: productApi.reducer,
        
        [categoryApi.reducerPath]: categoryApi.reducer,
        [subCategoryApi.reducerPath]: subCategoryApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [loggedUserApi.reducerPath]: loggedUserApi.reducer,
        [wishlistApi.reducerPath]: wishlistApi.reducer,
        [addressApi.reducerPath]: addressApi.reducer,
        [couponApi.reducerPath]: couponApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    // Cache, Polling , invalidate cache
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        productApi.middleware,
        reviewApi.middleware,
        categoryApi.middleware,
        subCategoryApi.middleware,
        brandApi.middleware,
        userApi.middleware,
        authApi.middleware,
        loggedUserApi.middleware,
        wishlistApi.middleware,
        addressApi.middleware,
        couponApi.middleware,
        cartApi.middleware,
        orderApi.middleware,
    )
})
//refetchOnReconnect, refetchOnFocus
// YAGNI (
//setupListeners(store.dispatch)
