export type FavoriteItem = {
  image: string | undefined
  id: number
  quantity: number
  price: number
  title: string
} 
export type Favorite = {
  favoriteItems: FavoriteItem[]
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}