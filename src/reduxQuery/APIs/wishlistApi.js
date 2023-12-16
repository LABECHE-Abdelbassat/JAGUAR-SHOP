import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const wishlistApi = createApi({
    reducerPath: 'wishlistApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Wishlist'],
    endpoints: (builder) => ({
        //CRUD
        getAllProductsWishlist: builder.query({
            query: (token) => ({
                url :'/wishlist',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Wishlist', id})),
                        {type: 'Wishlist', id: 'LIST'}
                    ]
                    : [{type: 'Wishlist', id: 'LIST'}],
        }),
        addProductToWishlist: builder.mutation({
                query: (product,token) => ({
                    url: '/wishlist',
                    method: 'POST',
                    body:product,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Wishlist',
                    id: 'LIST'
                }]
            },
        ),

        deleteProductFromWishlist: builder.mutation({
                query: (id,token) => ({
                    url: `/wishlist/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Wishlist', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllProductsWishlistQuery, useAddProductToWishlistMutation, useDeleteProductFromWishlistMutation} = wishlistApi