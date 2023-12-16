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
            query: (token) => ({
                url:'/addresses',
                headers: {
                    Authorization: `Bearer ${token}`,
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
            query: (id,token) => ({url : `/addresses/${id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        }),
        addAddress: builder.mutation({
                query: (address,token) => ({
                    url: '/addresses',
                    method: 'POST',
                    body:address,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Address',
                    id: 'LIST'
                }]
            },
        ),
        updateAddress: builder.mutation({
                query: (id,address,token) => ({
                    url: `/addresses/${id}`,
                    method: 'PUT',
                    body:address,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'Address',
                    id: 'LIST'
                }]
            },
        ),
        deleteAddress: builder.mutation({
                query: (id,token) => ({
                    url: `/addresses/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Address', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllUserAddressesQuery, useGetAddressQuery, useAddAddressMutation,useUpdateAddressMutation, useDeleteAddressMutation} = addressApi