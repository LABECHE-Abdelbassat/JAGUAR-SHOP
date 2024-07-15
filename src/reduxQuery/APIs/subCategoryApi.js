import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";

export const subCategoryApi = createApi({
  reducerPath: "subCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseurl,
  }),
  // keepUnusedDataFor: 120,
  tagTypes: ["SubCategory"],
  endpoints: (builder) => ({
    //CRUD
    getAllSubCategories: builder.query({
      query: () => "/subcategories",
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "SubCategory", id })),
              { type: "SubCategory", id: "LIST" },
            ]
          : [{ type: "SubCategory", id: "LIST" }],
    }),
    getAllSubCategoriesOnCategory: builder.query({
      query: (id) => `/categories/${id}/subcategories`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "SubCategory", id })),
              { type: "SubCategory", id: "LIST" },
            ]
          : [{ type: "SubCategory", id: "LIST" }],
    }),
    getSubCategory: builder.query({
      query: (id) => `/subcategories/${id}`,
      providesTags: (result, error, id) => {
        return [
          { type: "SubCategory", id },
          { type: "SubCategory", id: "LIST" },
        ];
      },
    }),
    createSubCategory: builder.mutation({
      query: (subCategory) => ({
        url: "/subcategories",
        method: "POST",
        body: subCategory,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: [
        {
          type: "SubCategory",
          id: "LIST",
        },
      ],
    }),
    createSubCategoryOnCategory: builder.mutation({
      query: ({ id, subCategory }) => ({
        url: `/categories/${id}/subcategories`,
        method: "POST",
        body: subCategory,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: [
        {
          type: "SubCategory",
          id: "LIST",
        },
      ],
    }),
    updateSubCategory: builder.mutation({
      query: ({ id, subCategory }) => ({
        url: `/subcategories/${id}`,
        method: "PUT",
        body: subCategory,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: [
        {
          type: "SubCategory",
          id: "LIST",
        },
      ],
    }),
    deleteSubCategory: builder.mutation({
      query: (id) => ({
        url: `/subcategories/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
      invalidatesTags: (result, error, id) => {
        return [
          { type: "SubCategory", id },
          { type: "SubCategory", id: "LIST" },
        ];
      },
    }),
  }),
});
// Dynamic hook
export const {
  useGetAllSubCategoriesQuery,
  useGetAllSubCategoriesOnCategoryQuery,
  useLazyGetAllSubCategoriesOnCategoryQuery,
  useGetSubCategoryQuery,
  useCreateSubCategoryMutation,
  useCreateSubCategoryOnCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,
} = subCategoryApi;
