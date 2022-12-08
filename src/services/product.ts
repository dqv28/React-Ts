import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IProduct from '../interfaces/product'

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['product'],
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], void>({
            query: () => '/products',
            providesTags: ['product']
        })
    })
})

export const {useGetProductsQuery} = productApi
