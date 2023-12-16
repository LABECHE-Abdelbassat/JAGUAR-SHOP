import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        //CRUD
        getAllProducts: builder.query({
            query: () => '/products',
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Product', id})),
                        {type: 'Product', id: 'LIST'}
                    ]
                    : [{type: 'Product', id: 'LIST'}],
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        createProduct: builder.mutation({
                query: (product) => ({
                    url: '/products',
                    method: 'POST',
                    body:product,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Product',
                    id: 'LIST'
                }]
            },
        ),
        updateProduct: builder.mutation({
                query: (id,product) => ({
                    url: `/products/${id}`,
                    method: 'PUT',
                    body:product,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Product',
                    id: 'LIST'
                }]
            },
        ),
        deleteProduct: builder.mutation({
                query: (id) => ({
                    url: `/products/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Product', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation,useUpdateProductMutation, useDeleteProductMutation} = productApi