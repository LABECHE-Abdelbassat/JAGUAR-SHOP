import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const loggedUserApi = createApi({
    reducerPath: 'loggedUserApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['LoggedUser'],
    endpoints: (builder) => ({
        getLoggedUser: builder.query({
            query: (token) => ({
                url :`/users/getMe` ,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags : ["LoggedUser"]
        }),
        createLoggedUser: builder.mutation({
                query: (loggedUser,token) => ({
                    url: '/loggedUsers',
                    method: 'POST',
                    body:loggedUser,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'LoggedUser',
                    id: 'LIST'
                }]
            },
        ),
        updateLoggedUser: builder.mutation({
                query: (userData,token) => ({
                    url: `/users/updateMe`,
                    method: 'PUT',
                    body:userData,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        ),
        updateLoggedUserPassword: builder.mutation({
                query: (pass,token) => ({
                    url: `/users/changeMyPassword`,
                    method: 'PUT',
                    body:pass,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        ),
        deleteLoggedUser: builder.mutation({
                query: (token) => ({
                    url: `/users/deleteMe`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        )
    })
})
// Dynamic hook
export const {useGetLoggedUserQuery, useCreateLoggedUserMutation,useUpdateLoggedUserMutation, useUpdateLoggedUserPasswordMutation,useDeleteLoggedUserMutation} = loggedUserApi