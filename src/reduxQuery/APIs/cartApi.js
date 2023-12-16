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
            query: (token) => ({
                url :'/cart',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ['Cart']
        }),
        addProductToCart: builder.mutation({
                query: (product,token) => ({
                    url: '/cart',
                    method: 'POST',
                    body:product,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        updateCartProductQuantity: builder.mutation({
                query: (id,qte,token) => ({
                    url: `/cart/${id}`,
                    method: 'PUT',
                    body:qte,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        applyCouponToCart: builder.mutation({
                query: (coupon,token) => ({
                    url: `/cart/applyCoupon`,
                    method: 'PUT',
                    body:coupon,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        removeSpecificCartItem: builder.mutation({
                query: (id,token) => ({
                    url: `/cart/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        ),
        clearUserCart: builder.mutation({
                query: (token) => ({
                    url: `/cart`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['Cart']
            },
        )
    })
})
// Dynamic hook
export const {useGetUserCartQuery, useAddProductToCartMutation,useApplyCouponToCartMutation,useUpdateCartProductQuantityMutation ,useClearUserCartMutation , useRemoveSpecificCartItemMutation} = cartApi