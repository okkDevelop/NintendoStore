import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { News, NewsDto } from "./News";

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchAllNews: builder.query<News[], void>({
            query: () => {
                return {
                    url: 'news',
                }
            },
        }),
        fetchNewsDetails: builder.query<News, string>({
            query: (slug) => ({ url: `news/${slug}` }),
        }),
        addNews: builder.mutation<News, NewsDto>({
            query: (news) => ({
                url: 'news/addNews',
                method: 'POST',
                body: news
            }),
        }),
        updateNews: builder.mutation<News, NewsDto>({
            query: (news) => ({
                url: 'news/updateNews',
                method: 'PATCH',
                body: news
            }),
        }),
        removeNews: builder.mutation<void, string>({
            query: (slug) => ({
                url: `news/removeNews?slug=${slug}`,
                method: 'DELETE'
            }),
        })
    })
})

export const { useFetchAllNewsQuery, useFetchNewsDetailsQuery, useAddNewsMutation, useUpdateNewsMutation, useRemoveNewsMutation } = newsApi;