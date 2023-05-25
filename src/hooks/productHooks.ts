import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>('products')).data,
  })

export const useGetProductDetailsBySlugQuery = (id: string) =>
  useQuery({
    queryKey: ['products', id],
    queryFn: async () =>
      (await apiClient.get<Product>(`products/${id}`)).data,
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: async () =>
      (await apiClient.get<[]>(`products/categories`)).data,
  })

export const useGetCategoryQuery = (category: string) =>
  useQuery({
    queryKey: ['category', category],
    queryFn: async () =>
      (await apiClient.get<Product>(`products/${category}`)).data,
  })