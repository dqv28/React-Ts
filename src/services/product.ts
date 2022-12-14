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
        }),
        getProduct: builder.query<IProduct, number>({
            query: (id: number) => `/products/${id}`,
            providesTags: ['product']
        }),
        addProduct: builder.mutation({
            query: (product: IProduct) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['product']
        }),
        editProduct: builder.mutation({
            query: (product: IProduct) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['product']
        }),
        removeProduct: builder.mutation({
            query: (id: number) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['product']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useRemoveProductMutation
} = productApi
