import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Products"],
  endpoints: build => ({
    getProducts: build.query({
      query: (shop) => ({
        url: `/shops/?name=${shop}`,
      }),
      providesTags: "Products"
    }),
  })
})