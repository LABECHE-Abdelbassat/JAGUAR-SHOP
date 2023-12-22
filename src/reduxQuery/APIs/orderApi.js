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
            query: () => ({
                url :'/orders',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            query: (id) => ({
                url :`/orders/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
        }),
        checkoutSession: builder.query({
            query: (id) => ({
                url :`/orders/checkout-session/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
        }),
        createCashOrder: builder.mutation({
                query: (args) => ({
                    url: `/orders/${args.id}`,
                    method: 'POST',
                    body:args.checkOutObj,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Order',
                    id: 'LIST'
                }]
            },
        ),
        updateOrdertoPaid: builder.mutation({
                query: (id) => ({
                    url: `/orders/${id}/pay`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Order',
                    id: 'LIST'
                }]
            },
        ),
        updateOrdertoDeliver: builder.mutation({
                query: (id) => ({
                    url: `/orders/${id}/deliver`,
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
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