import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        //CRUD
        getAllOrders: builder.query({
            query: (token) => ({
                url :'/orders',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Order', id})),
                        {type: 'Order', id: 'LIST'}
                    ]
                    : [{type: 'Order', id: 'LIST'}],
        }),
        getOrder: builder.query({
            query: (id,token) => ({
                url :`/orders/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }),
        checkoutSession: builder.query({
            query: (id,token) => ({
                url :`/orders/checkout-session/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
        }),
        createCashOrder: builder.mutation({
                query: (id,order,token) => ({
                    url: `/orders/${id}`,
                    method: 'POST',
                    body:order,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Order',
                    id: 'LIST'
                }]
            },
        ),
        updateOrdertoPaid: builder.mutation({
                query: (id,token) => ({
                    url: `/orders/${id}/pay`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Order',
                    id: 'LIST'
                }]
            },
        ),
        updateOrdertoDeliver: builder.mutation({
                query: (id,token) => ({
                    url: `/orders/${id}/deliver`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Order',
                    id: 'LIST'
                }]
            },
        )
    })
})
// Dynamic hook
export const {useGetAllOrdersQuery , useGetOrderQuery , useCheckoutSessionQuery , useCreateCashOrderMutation , useUpdateOrdertoDeliverMutation , useUpdateOrdertoPaidMutation} = orderApi