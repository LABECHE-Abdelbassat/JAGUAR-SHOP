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
            query: () => ({
                url :'/users',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
            query: (id) => ({
                url :`/users/${id}`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
            providesTags:  [{type: 'User', id: 'LIST'}],
        }),
        createUser: builder.mutation({
                query: (user) => ({
                    url: '/users',
                    method: 'POST',
                    body:user,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        updateUser: builder.mutation({
                query: ({id,user}) => ({
                    url: `/users/${id}`,
                    method: 'PUT',
                    body:user,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        updateUserPassword: builder.mutation({
                query: ({id,pass}) => ({
                    url: `/users/changePassword/${id}`,
                    method: 'PUT',
                    body:pass,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'User',
                    id: 'LIST'
                }]
            },
        ),
        deleteUser: builder.mutation({
                query: (id) => ({
                    url: `/users/${id}`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'User', id :'LIST'}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllUsersQuery, useGetUserQuery, useCreateUserMutation,useUpdateUserMutation,useUpdateUserPasswordMutation, useDeleteUserMutation} = userApi