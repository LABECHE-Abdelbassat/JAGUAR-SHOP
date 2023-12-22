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
            query: () => ({
                url :`/wishlist`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
            providesTags: [{type: 'Wishlist', id: 'LIST'}]
        }),
        addProductToWishlist: builder.mutation({
                query: (productId) => ({
                    url: '/wishlist',
                    method: 'POST',
                    body:productId,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Wishlist',
                    id: 'LIST'
                }]
            },
        ),

        deleteProductFromWishlist: builder.mutation({
                query: (id) => ({
                    url: `/wishlist/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Wishlist', id:"LIST"}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllProductsWishlistQuery, useAddProductToWishlistMutation, useDeleteProductFromWishlistMutation} = wishlistApi