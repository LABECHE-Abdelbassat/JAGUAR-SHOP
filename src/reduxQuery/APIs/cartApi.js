import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        getUserCart: builder.query({
            query: () => ({
                url :'/cart',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
            providesTags: ['Cart']
        }),
        addProductToCart: builder.mutation({
                query: (product) => ({
                    url: '/cart',
                    method: 'POST',
                    body:product,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        updateCartProductQuantity: builder.mutation({
                query: (arg) => ({
                    url: `/cart/${arg.id}`,
                    method: 'PUT',
                    body:arg.quantity,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        applyCouponToCart: builder.mutation({
                query: (coupon) => ({
                    url: `/cart/applyCoupon`,
                    method: 'PUT',
                    body:coupon,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        removeSpecificCartItem: builder.mutation({
                query: (id) => ({
                    url: `/cart/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        clearUserCart: builder.mutation({
                query: () => ({
                    url: `/cart`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        )
    })
})
// Dynamic hook
export const {useGetUserCartQuery, useAddProductToCartMutation,useApplyCouponToCartMutation,useUpdateCartProductQuantityMutation ,useClearUserCartMutation , useRemoveSpecificCartItemMutation} = cartApi