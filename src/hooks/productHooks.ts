import { useQuery } from '@tanstack/react-query'
import apiClient from '../utils/apiClient'
import { Product } from '../types/Product'

export const getProducts = (category: string) =>
  useQuery({
    queryKey: ['products', category],
    queryFn: async () => (await apiClient.get<Product[]>(`products/${category}`)).data,
  })

export const getProduct = (id: string) =>
  useQuery({
    queryKey: ['products', id],
    queryFn: async () =>
      (await apiClient.get<Product>(`products/${id}`)).data,
  })

