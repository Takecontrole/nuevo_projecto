// @ts-nocheck
import { useContext, useEffect, useState } from 'react'
import {
  Button,
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './utils/Store'
import Carousel from './components/Carousel'
import LoadingBox from './components/LoadingBox'
import { getError } from './utils/utils'
import { ApiError } from './types/ApiError'
import Home from './pages/Home'
import ProductList from './components/ProductList'

function App() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store) 
   const [category, setCategory] = useState(""); 
   const [value, setValue] = useState(""); 
 
  const handleSubmit = (e: React.SyntheticEvent) => {
    setValue(e.target.value);
  }

  return ( 
    <div className="App">
    <div className="d-flex flex-column vh-100">
      <ToastContainer position="top-center"
autoClose={2000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
limit={1} />
      <header>
              <div className="Announcement">Бессплатная доставка при заказе на сумму выше 5000руб!</div>
        <Navbar
          className="d-flex flex-column align-items-stretch p-2 pb-0 mb-3"
          expand="lg"
          style={{
            width: "100%",
            backgroundColor:"black",
            color:"white"
          }}
        > 

          <div className="d-flex justify-content-between align-items-center">
            <LinkContainer to="/" className="header-link">
              <div>Домашняя</div>
            </LinkContainer>
            <LinkContainer to="/selected" className="header-link">
              <div>Избранные</div>
            </LinkContainer> 
            {/*
           */} 
             <div className="search">

      <input
        type="text"
        placeholder="Найти..."
        style={{width:"100%", backgroundColor:"transparent", border:"none", outline:"none"}}
        value={value}
        onChange={handleSubmit}
      /> 
      
      </div>
                            <Link to="/cart" className="nav-link header-link p-0"style={{border:"none"}}>                                           <i className="fas fa-shopping-cart"></i>
                                        
                  {
                 <span className="badge badge-warning" id="cartcount">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  }
            </Link>
          </div>
        </Navbar>
      </header>
      
            <main className="mt-5">
             <Carousel/> 
        <Container className="mt-5">
                <Home value={value}  />
        </Container>
      </main>
    </div>
   </div>
  )
}

export default App
