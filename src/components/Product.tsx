// @ts-nocheck
import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../utils/Store'
import { CartItem } from '../types/Cart'
import { FavoriteItem } from '../types/Favorite'
import { Product } from '../types/Product'
import { convertProductToCartItem } from '../utils/utils'
import { convertProductToFavoriteItem } from '../utils/utils'


function SingleProduct({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
    favorite: { favoriteItems },
  } = state

  const handleAddToCart = (item: CartItem) => {
    const existItem = cartItems.find((x) => x.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
    toast.success('Добавлен')
  }
  
  const handleAddToFavorite = (item: FavoriteItem) => {
    const existFavoriteItem = favoriteItems.find((x) => x.id === product.id)
    const quantity = existFavoriteItem ? existFavoriteItem.quantity + 1 : 1
    dispatch({
      type: 'FAVORITE_ADD_ITEM',
      payload: { ...item, quantity },
    })
    toast.success('Добавлено в избранное')
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
          <Button className="category-button"
            onClick={() => handleAddToCart(convertProductToCartItem(product))}
          >
            В корзину
          </Button>
          <Button className="category-button"
            onClick={() => handleAddToFavorite(convertProductToFavoriteItem(product))}
          > 
          В избранное 
          </Button>
          </div>
      </Card.Body>
    </div>
  )
}

export default SingleProduct
