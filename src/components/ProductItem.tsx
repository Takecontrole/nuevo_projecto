// @ts-nocheck
import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { FavoriteItem } from '../types/Favorite'
import { Product } from '../types/Product'
import { convertProductToCartItem } from '../utils'
import { convertProductToFavoriteItem } from '../utils'


function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
    favorite: { favoriteItems },
  } = state

  const addToCartHandler = (item: CartItem) => {
    const existItem = cartItems.find((x) => x.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
    toast.success('Товар добавлен в корзину')
  }
  
  const addToFavoriteHandler = (item: FavoriteItem) => {
    const existFavoriteItem = favoriteItems.find((x) => x.id === product.id)
    const quantity = existFavoriteItem ? existFavoriteItem.quantity + 1 : 1
    dispatch({
      type: 'FAVORITE_ADD_ITEM',
      payload: { ...item, quantity },
    })
    toast.success('Товар добавлен в избранное')
  }

  return (
    <div className="d-flex flex-column justify-content-center text-center  " >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
      </Link>
      <Card.Body>
        <Link style={{textDecoration:"none", color:"black"}}  to={`/product/${product.id}`}>
          <Card.Title>{product.title}</Card.Title>
        </Link>

        <Card.Text>${product.price}</Card.Text>

        <div className="d-flex justify-content-between">
          <Button variant="dark"
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            Добавить в корзину
          </Button>
          <Button variant="dark"
            onClick={() => addToFavoriteHandler(convertProductToFavoriteItem(product))}
          > 
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> 
          </Button>
          </div>
      </Card.Body>
    </div>
  )
}

export default ProductItem
