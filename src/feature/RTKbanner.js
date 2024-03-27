import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getBannerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8040/api/v1"
    }),
 
    endpoints:(builder) =>({
        getBanner: builder.query({query:()=> "/product/getbanner"}),
        uplodeBanner: builder.mutation({
            query: (body) => ({
                url: "/product/uplodebanner",
                method: 'POST',
                body,
            }),
           
        }),
        deleteBanner: builder.mutation({
            query: (id) => ({
                url: `/product/deletbanner/${id}`,
                method: 'DELETE'
            })
        }),
    })
})

export const {useGetBannerQuery,useUplodeBannerMutation,useDeleteBannerMutation}=getBannerApi