// @ts-nocheck
import { useContext } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { FavoriteItem } from '../types/Favorite'
import { Product } from '../types/Product'
import { convertProductToCartItem } from '../utils'
import { convertProductToFavoriteItem } from '../utils'

function FavoriteCard({ product }: { product: Product }) {
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
  
  const removeItemHandler = (product: FavoriteItem) => {
    dispatch({ type: 'FAVORITE_REMOVE_ITEM', payload: product })
  }
  

  return (
       

                
                     <div className="d-flex flex-column justify-content-center text-center  " >
                      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
                            </Link>
                     
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

                    
                      <Button
                        onClick={() => removeItemHandler(product)}
                        variant="primary"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                   </div>
                  </div>
               
              
           
          
  )
}

export default FavoriteCard

