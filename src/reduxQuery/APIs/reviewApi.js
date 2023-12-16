import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const reviewApi = createApi({
    reducerPath: 'reviewApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Review'],
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
            query: (id) => `/reviews/${id}`
        }),
        createReview: builder.mutation({
                query: (review,token) => ({
                    url: '/reviews',
                    method: 'POST',
                    body:review,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Review',
                    id: 'LIST'
                }]
            },
        ),
        updateReview: builder.mutation({
                query: (id,review,token) => ({
                    url: `/reviews/${id}`,
                    method: 'PUT',
                    body:review,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Review',
                    id: 'LIST'
                }]
            },
        ),
        deleteReview: builder.mutation({
                query: (id,token) => ({
                    url: `/reviews/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Review', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllReviewsQuery,useGetAllReviewsOnProductQuery, useGetReviewQuery, useCreateReviewMutation,useUpdateReviewMutation, useDeleteReviewMutation} = reviewApi