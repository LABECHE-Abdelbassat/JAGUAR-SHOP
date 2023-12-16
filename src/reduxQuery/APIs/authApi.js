import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseurl
    }),
    // keepUnusedDataFor: 120,
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signUp: builder.mutation({
                query: (user) => ({
                    url: '/auth/signup',
                    method: 'POST',
                    body:user
                }),
                invalidatesTags: [{
                    type: 'Auth',
                    id: 'LIST'
                }]
            },
        ),
        logIn: builder.mutation({
                query: (user) => ({
                    url: '/auth/login',
                    method: 'POST',
                    body:user
                }),
                invalidatesTags: [{
                    type: 'Auth',
                    id: 'LIST'
                }]
            },
        ),
        forgotPassword: builder.mutation({
                query: (email) => ({
                    url: '/auth/forgotPasswords',
                    method: 'POST',
                    body:email
                }),
                invalidatesTags: [{
                    type: 'Auth',
                    id: 'LIST'
                }]
            },
        ),
        verifyResetCode: builder.mutation({
                query: (code) => ({
                    url: '/auth/verifyResetCode',
                    method: 'POST',
                    body:code
                }),
                invalidatesTags: [{
                    type: 'Auth',
                    id: 'LIST'
                }]
            },
        ),
        resetPassword: builder.mutation({
                query: (user) => ({
                    url: `/auth/resetPassword`,
                    method: 'PUT',
                    body:user
                }),
                invalidatesTags: [{
                    type: 'Auth',
                    id: 'LIST'
                }]
            },
        )
    })
})
// Dynamic hook
export const {useSignUpMutation , useLogInMutation , useForgotPasswordMutation , useVerifyResetCodeMutation , useResetPasswordMutation} = authApi