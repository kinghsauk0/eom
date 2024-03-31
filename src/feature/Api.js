import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8040/api/v1",
  }),

  endpoints: (builder) => ({
    getBanner: builder.query({ query: () => "/product/getbanner" }),
    uplodeBanner: builder.mutation({
      query: (body) => ({
        url: "/product/uplodebanner",
        method: "POST",
        body,
      }),
    }),
    deleteBanner: builder.mutation({
      query: (id) => ({
        url: `/product/deletbanner/${id}`,
        method: "DELETE",
      }),
    }),

    RegisterUser: builder.mutation({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
      onSuccess: (response) =>{
        console.log(response)
      }
    }),

    LoginrUser: builder.mutation({
        query: (body) => ({
          url: "/user/login",
          method: "POST",
          body,
        }),
        transformResponse: (response, meta, arg) => response.data,
        transformErrorResponse: (response, meta, arg) => response.status,
      }),
  }),
});

export const {
  useGetBannerQuery,
  useUplodeBannerMutation,
  useDeleteBannerMutation,
  useRegisterUserMutation,
  useLoginrUserMutation
} = Api;
