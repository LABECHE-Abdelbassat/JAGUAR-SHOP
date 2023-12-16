import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const couponApi = createApi({
    reducerPath: 'couponApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Coupon'],
    endpoints: (builder) => ({
        //CRUD
        getAllCoupons: builder.query({
            query: (token) => ({
                url :'/coupons',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Coupon', id})),
                        {type: 'Coupon', id: 'LIST'}
                    ]
                    : [{type: 'Coupon', id: 'LIST'}],
        }),
        getCoupon: builder.query({
            query: (id,token) => ({url : `/coupons/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        }),
        createCoupon: builder.mutation({
                query: (coupon,token) => ({
                    url: '/coupons',
                    method: 'POST',
                    body:coupon,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Coupon',
                    id: 'LIST'
                }]
            },
        ),
        updateCoupon: builder.mutation({
                query: (id,coupon,token) => ({
                    url: `/coupons/${id}`,
                    method: 'PUT',
                    body:coupon,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Coupon',
                    id: 'LIST'
                }]
            },
        ),
        deleteCoupon: builder.mutation({
                query: (id,token) => ({
                    url: `/coupons/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Coupon', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllCouponsQuery, useGetCouponQuery, useCreateCouponMutation,useUpdateCouponMutation, useDeleteCouponMutation} = couponApi