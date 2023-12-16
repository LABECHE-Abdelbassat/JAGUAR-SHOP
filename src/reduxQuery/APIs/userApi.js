import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['User'],
    endpoints: (builder) => ({
        //CRUD
        getAllUsers: builder.query({
            query: (token) => ({
                url :'/users',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),

            providesTags: (result) =>
                result
                    ? [
                        ...result.data.map(({id}) => ({type: 'User', id})),
                        {type: 'User', id: 'LIST'}
                    ]
                    : [{type: 'User', id: 'LIST'}],
        }),
        getUser: builder.query({
            query: (id,token) => ({
                url :`/users/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
        createUser: builder.mutation({
                query: (user,token) => ({
                    url: '/users',
                    method: 'POST',
                    body:user,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        updateUser: builder.mutation({
                query: (id,user,token) => ({
                    url: `/users/${id}`,
                    method: 'PUT',
                    body:user,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        updateUserPassword: builder.mutation({
                query: (id,pass,token) => ({
                    url: `/users/change-password/${id}`,
                    method: 'PUT',
                    body:pass,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        deleteUser: builder.mutation({
                query: (id,token) => ({
                    url: `/users/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'User', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllUsersQuery, useGetUserQuery, useCreateUserMutation,useUpdateUserMutation,useUpdateUserPasswordMutation, useDeleteUserMutation} = userApi