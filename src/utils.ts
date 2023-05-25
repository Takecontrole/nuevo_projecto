import { ApiError } from './types/ApiError'
import { CartItem } from './types/Cart'
import { FavoriteItem } from './types/Favorite'
import { Product } from './types/Product'

export const getError = (error: ApiError) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}

export const convertProductToCartItem = (product: Product): CartItem => {
  const cartItem: CartItem = {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    quantity: 1,
  }
  return cartItem
}

export const convertProductToFavoriteItem = (product: Product): FavoriteItem => {
  const favoriteItem: FavoriteItem = {
    id: product.id,
    title: product.title,
    image: product.image,
    price: product.price,
    quantity: 1,
  }
  return favoriteItem
}
   // countInStock: product.countInStock,
