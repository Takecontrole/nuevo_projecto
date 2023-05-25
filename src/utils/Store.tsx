import React from 'react'
import { Cart, CartItem } from '../types/Cart'
import {Favorite, FavoriteItem } from '../types/Favorite'


type AppState = {
  cart: Cart
  favorite: Favorite
}

const initialState: AppState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems')!)
      : [],
    itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
  },
  favorite: {
    favoriteItems: localStorage.getItem('favoriteItems')
      ? JSON.parse(localStorage.getItem('favoriteItems')!)
      : [],
      itemsPrice: 0,
    shippingPrice: 0,
    taxPrice: 0,
    totalPrice: 0,
    
  },
}

type Action =
  | { type: 'CART_ADD_ITEM'; payload: CartItem }
  | { type: 'CART_REMOVE_ITEM'; payload: CartItem }
  | { type: 'CART_CLEAR' }
  | { type: 'FAVORITE_ADD_ITEM'; payload: FavoriteItem }
  | { type: 'FAVORITE_REMOVE_ITEM'; payload: FavoriteItem }
  | { type: 'FAVORITE_CLEAR' }


function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(
        (item: CartItem) => item.id === newItem.id
      )
      const cartItems = existItem
        ? state.cart.cartItems.map((item: CartItem) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.cart.cartItems, newItem]

      localStorage.setItem('cartItems', JSON.stringify(cartItems))

      return { ...state, cart: { ...state.cart, cartItems } }

    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item: CartItem) => item.id !== action.payload.id
      )
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, cartItems: [] } }

case 'FAVORITE_ADD_ITEM':
      const newFavoriteItem = action.payload
      const existFavoriteItem = state.favorite.favoriteItems.find(
        (item: FavoriteItem) => item.id === newFavoriteItem.id
      )
      const favoriteItems = existFavoriteItem
        ? state.favorite.favoriteItems.map((item: FavoriteItem) =>
            item.id === existFavoriteItem.id ? newFavoriteItem : item
          )
        : [...state.favorite.favoriteItems, newFavoriteItem]

      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))

      return { ...state, favorite: { ...state.favorite, favoriteItems } }

    case 'FAVORITE_REMOVE_ITEM': {
      const favoriteItems = state.favorite.favoriteItems.filter(
        (item: FavoriteItem) => item.id !== action.payload.id
      )
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems))
      return { ...state, favorite: { ...state.favorite, favoriteItems } }
    }
    case 'FAVORITE_CLEAR':
      return { ...state, favorite: { ...state.favorite, favoriteItems: [] } }

    default:
      return state
  }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState

const Store = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
})

function StoreProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(
    reducer,
    initialState
  )

  return <Store.Provider value={{ state, dispatch }} {...props} />
}

export { Store, StoreProvider }
