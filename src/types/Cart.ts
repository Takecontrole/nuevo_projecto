export type CartItem = {
  image: string | undefined
  id: number
  quantity: number
  price: number
  title: string
}
  //countInStock: number
  //id: number
/*
export type ShippingAddress = {
  fullName: string
  address: string
  city: string
  country: string
  postalCode: string
}
*/
export type Cart = {
  cartItems: CartItem[]
 // shippingAddress: ShippingAddress
 // paymentMethod: string
  itemsPrice: number
  shippingPrice: number
  taxPrice: number
  totalPrice: number
}
