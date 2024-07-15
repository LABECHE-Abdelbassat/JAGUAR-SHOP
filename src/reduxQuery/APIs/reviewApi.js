import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";
import { baseApi } from "./baseApi";

export const reviewApi = baseApi.injectEndpoints({
    // keepUnusedDataFor: 120,
    endpoints: (builder) => ({
        //CRUD
        getAllReviews: builder.query({
            query: () => '/reviews',
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Review', id})),
                        {type: 'Review', id: 'LIST'}
                    ]
                    : [{type: 'Review', id: 'LIST'}],
        }),
        getAllReviewsOnProduct: builder.query({
            query: (productId) => `/products/${productId}/reviews`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Review', id})),
                        {type: 'Review', id: 'LIST'}
                    ]
                    : [{type: 'Review', id: 'LIST'}],
        }),
        getReview: builder.query({
            query: (id) => `/reviews/${id}`,
            providesTags:[{type:"Review" , id:"LIST"}]
        }),
        createReview: builder.mutation({
                query: (review) => ({
                    url: '/reviews',
                    method: 'POST',
                    body:review,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Review',
                    id: 'LIST'
                }]
            },
        ),
        createReviewOnProduct: builder.mutation({
                query: (params) => ({
                    url:`/products/${params.id}/reviews`,
                    method: 'POST',
                    body:params.review,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Review',
                    id: 'LIST'
                },{type:'Product' , id : 'ITEM'}]
            },
        ),
        updateReview: builder.mutation({
                query: (params) => ({
                    url: `/reviews/${params.id}`,
                    method: 'PUT',
                    body:params.review,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Review',
                    id: 'LIST'
                },{type:'Product' , id : 'ITEM'}]
            },
        ),
        deleteReview: builder.mutation({
                query: (id) => ({
                    url: `/reviews/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Review', id},{type:"Review" , id:"LIST"},{type:'Product' , id : 'ITEM'}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllReviewsQuery,useGetAllReviewsOnProductQuery, useGetReviewQuery, useCreateReviewMutation,useCreateReviewOnProductMutation,useUpdateReviewMutation, useDeleteReviewMutation} = reviewApi