import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseurl } from "../../api/baseURL";
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseurl }),
  tagTypes: ["Product", "Review"],
  endpoints: () => ({}),
});