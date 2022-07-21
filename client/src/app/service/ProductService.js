import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Products", "Cart"],
  endpoints: build => ({
    getProducts: build.query({
      query: (shop) => ({
        url: `/shops/?name=${shop}`,
      }),
      providesTags: "Products"
    }),

    getShops: build.query({
      query: () => ({
        url: '/shops'
      }),
    }),

    getCartProducts: build.query({
      query: () => ({
        url: "/cart"
      }),
      providesTags: "Cart"
    }),

    createOrder: build.mutation({
      query: (order) => ({
        url: "/order",
        method: "POST",
        body: order
      }),
      invalidatesTags: "Cart"
    })
  })
})