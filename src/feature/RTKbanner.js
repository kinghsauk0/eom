import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const getBannerApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8040/api/v1"
    }),
    endpoints:(builder) =>({
        getBanner: builder.query({query:()=> "/product/getbanner"}),
    })
})

export const {useGetBannerQuery}=getBannerApi