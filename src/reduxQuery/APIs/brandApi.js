import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const brandApi = createApi({
    reducerPath: 'brandApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Brand'],
    endpoints: (builder) => ({
        //CRUD
        getAllBrands: builder.query({
            query: () => '/brands',
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Brand', id})),
                        {type: 'Brand', id: 'LIST'}
                    ]
                    : [{type: 'Brand', id: 'LIST'}],
        }),
        getBrand: builder.query({
            query: (id) => `/brands/${id}`
        }),
        createBrand: builder.mutation({
                query: (brand) => ({
                    url: '/brands',
                    method: 'POST',
                    body:brand,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Brand',
                    id: 'LIST'
                }]
            },
        ),
        updateBrand: builder.mutation({
                query: ({id,brand}) => ({
                    url: `/brands/${id}`,
                    method: 'PUT',
                    body:brand,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Brand',
                    id: 'LIST'
                }]
            },
        ),
        deleteBrand: builder.mutation({
                query: (id) => ({
                    url: `/brands/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Brand', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllBrandsQuery, useGetBrandQuery, useCreateBrandMutation,useUpdateBrandMutation, useDeleteBrandMutation} = brandApi