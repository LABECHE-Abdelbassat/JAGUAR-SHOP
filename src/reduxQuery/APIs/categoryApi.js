import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        //CRUD
        getAllCategories: builder.query({
            query: () => '/categories',
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Category', id})),
                        {type: 'Category', id: 'LIST'}
                    ]
                    : [{type: 'Category', id: 'LIST'}],
        }),
        getCategory: builder.query({
            query: (id) => `/categories/${id}`
        }),
        createCategory: builder.mutation({
                query: (category) => ({
                    url: '/categories',
                    method: 'POST',
                    body:category,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Category',
                    id: 'LIST'
                }]
            },
        ),
        updateCategory: builder.mutation({
                query: (id,category,token) => ({
                    url: `/categories/${id}`,
                    method: 'PUT',
                    body:category,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Category',
                    id: 'LIST'
                }]
            },
        ),
        deleteCategory: builder.mutation({
                query: (id,token) => ({
                    url: `/categories/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Category', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllCategoriesQuery, useGetCategoryQuery, useCreateCategoryMutation,useUpdateCategoryMutation, useDeleteCategoryMutation} = categoryApi