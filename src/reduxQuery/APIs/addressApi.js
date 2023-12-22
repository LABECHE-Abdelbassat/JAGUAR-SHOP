import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const addressApi = createApi({
    reducerPath: 'addressApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Address'],
    endpoints: (builder) => ({
        //CRUD
        getAllUserAddresses: builder.query({
            query: () => ({
                url:'/addresses',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'Address', id})),
                        {type: 'Address', id: 'LIST'}
                    ]
                    : [{type: 'Address', id: 'LIST'}],
        }),
        getAddress: builder.query({
            query: (id) => ({url : `/addresses/${id}`,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        }),
        addAddress: builder.mutation({
                query: (address) => ({
                    url: '/addresses',
                    method: 'POST',
                    body:address,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Address',
                    id: 'LIST'
                }]
            },
        ),
        updateAddress: builder.mutation({
                query: (args) => ({
                    url: `/addresses/${args.id}`,
                    method: 'PUT',
                    body:args.address,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Address',
                    id: 'LIST'
                }]
            },
        ),
        deleteAddress: builder.mutation({
                query: (id) => ({
                    url: `/addresses/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Address',
                    id: 'LIST'
                }]
            },
        )
    })
})
// Dynamic hook
export const {useGetAllUserAddressesQuery, useGetAddressQuery, useAddAddressMutation,useUpdateAddressMutation, useDeleteAddressMutation} = addressApi