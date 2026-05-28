import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";
import type { ProductParams } from "../../app/models/productParams";
import { filterEmptyValues } from "../../lib/util";

export const catalogApi = createApi({
    reducerPath: 'catalogApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], ProductParams>({
            query: (productParams) => {
                return {
                    url: 'products',
                    params: filterEmptyValues(productParams)
                }
            },
            // 1. Tell RTK Query to cache data based on Search/Sort/Types, ignoring the loadedIndex
            serializeQueryArgs: ({ queryArgs }) => {
                const { loadedIndex, ...filters } = queryArgs;
                return filters;
            },

            // 2. Merge incoming paginated pages into a single growing infinite scrolling list!
            merge: (currentCache, newItems, { arg }) => {
                // If it's page 0, it means the user wiped or reset filters, so start fresh
                if (arg.loadedIndex === 0) {
                    return newItems;
                }
                // Otherwise, append the newly arriving page payload to our existing lists
                currentCache.push(...newItems);
            },

            // 3. Force the endpoint to update refetch tracks when args adjust
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            }
        }),
        fetchProductDetails: builder.query<Product, number>({
            query: (productId) => ({ url: `products/${productId}` })
        }),
        fetchFilters: builder.query < { types: string[] }, void >({
            query: () => 'products/filters'
        })
    })
})

export const { useFetchProductsQuery, useFetchProductDetailsQuery, useFetchFiltersQuery } = catalogApi;