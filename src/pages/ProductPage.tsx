import { useContext } from 'react'
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useGetProductDetailsBySlugQuery } from '../hooks/productHooks'
import { Store } from '../Store'
import { ApiError } from '../types/ApiError'
import { convertProductToCartItem, getError } from '../utils'

export default function ProductPage() {
  const params = useParams()
  const { id } = params
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(id!)

  const { state, dispatch } = useContext(Store)
  const { cart } = state

  const navigate = useNavigate()

  const addToCartHandler = () => {
    const existItem = cart.cartItems.find((x) => x.id === product!.id)
    const quantity = existItem ? existItem.quantity + 1 : 1

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...convertProductToCartItem(product!), quantity },
    })
    toast.success('Товар добавлен в корзину')
    navigate('/cart')
  }
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      <Row className="justify-content-center p-5">
        <Col md={6}>
          <img className="large" src={product.image} alt={product.title}></img>
        </Col>       
        
        <Col lg={6} className="pt-4">

                    <h1>$ {product.title}</h1>
                    <p>
                    {product.category}
                        
                    </p>
                    <p className="product__price">{product.price}</p>
                    <p style={{ textAlign: "justify" }} className="py-3">
                        <strong>Описание:</strong> {product.description}
                    </p>
                    </Col>

        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Цена:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>

                </ListGroup.Item>

                      <Button className="category-button"  onClick={addToCartHandler} >
                        Добавить в корзину
                      </Button>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
