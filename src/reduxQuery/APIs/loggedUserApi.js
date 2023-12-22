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
            query: () => ({
                url :`/users/getMe` ,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }),
            providesTags : ["LoggedUser"]
        }),
        createLoggedUser: builder.mutation({
                query: (loggedUser) => ({
                    url: '/loggedUsers',
                    method: 'POST',
                    body:loggedUser,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: [{
                    type: 'LoggedUser',
                    id: 'LIST'
                }]
            },
        ),
        updateLoggedUser: builder.mutation({
                query: (userData) => ({
                    url: `/users/updateMe`,
                    method: 'PUT',
                    body:userData,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        ),
        updateLoggedUserPassword: builder.mutation({
                query: (pass) => ({
                    url: `/users/changeMyPassword`,
                    method: 'PUT',
                    body:pass,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        ),
        deleteLoggedUser: builder.mutation({
                query: () => ({
                    url: `/users/deleteMe`,
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }),
                invalidatesTags: ['LoggedUser']
            },
        )
    })
})
// Dynamic hook
export const {useGetLoggedUserQuery, useCreateLoggedUserMutation,useUpdateLoggedUserMutation, useUpdateLoggedUserPasswordMutation,useDeleteLoggedUserMutation} = loggedUserApi