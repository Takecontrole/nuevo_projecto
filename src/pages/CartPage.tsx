import { useContext } from 'react'
import { Alert, Container, Table, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'

export default function CartPage() {
  const navigate = useNavigate()

  const {
    state: {
     // mode,
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store)

  const updateCartHandler = (item: CartItem, quantity: number) => {
   {/* if (item.countInStock < quantity) {
      toast.warn('Sorry. Product is out of stock')
      return
    }
    */}
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
  }
  
  const removeItemHandler = (item: CartItem) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }

  return (
    <div>

      <h1>Корзина</h1>      
      <LinkContainer  to="/"  >
              <div>
 Вернуться на домашнюю</div>
            </LinkContainer>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
    <Alert variant="info">Сейчас пусто.</Alert>
          ) : ( 
                          
                    <Col md={5}>
                       
                            <Table responsive="sm" className="cart-table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Товар</th>
                                        <th>Цена</th>
                                        <th>Количество</th>
                                        <th>Итог</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop through cart products */}
 {cartItems.map((item: CartItem) => (
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                              <i className="fa fa-times" style={{ marginRight: 10, cursor: "pointer" }}
                       onClick={() => removeItemHandler(item)}                       ></i>
                                                <img src={item.image} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                            </td>
                                            <td>{item.price}</td>
                                            <td>
                                                <span className="quantity-indicator">
                                                    <i className="fa fa-minus-circle" 
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }                            ></i>
                                                    <span>{item.quantity}</span>
                                                    <i className="fa fa-plus-circle" 
                      onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }                              ></i>
                                                </span>
                                            </td>
                                            <td>${item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                       
                    </Col>
          )}
          
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>

                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
