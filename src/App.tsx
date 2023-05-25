// @ts-nocheck
import { useContext, useEffect, useState } from 'react'
import {
  Badge,
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Store } from './Store'
import { useGetCategoriesQuery } from './hooks/productHooks'
import { useGetProductsQuery } from './hooks/productHooks'
import Carousel from './components/Carousel'
import LoadingBox from './components/LoadingBox'
import MessageBox from './components/MessageBox'
import { getError } from './utils'
import { ApiError } from './types/ApiError'
import HomePage from './pages/HomePage'
import ProductList from './components/ProductList'

function App() {
  const {
    state: { cart },
    dispatch,
  } = useContext(Store) 
   const [category, setCategory] = useState(""); 
   const [searchValue, setSearchValue] = useState(""); 
 
  const submitHandler = (e: React.SyntheticEvent) => {
    setSearchValue(e.target.value);
  }
// const [active, setActive] = useState(true);
/*
  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])
  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }
  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const { data: products, isLoading, error } = useGetProductsQuery()

  const itemsFilter = products?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ); 
*/
  
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
            <LinkContainer to="/favorite" className="header-link">
              <div>Избранные</div>
            </LinkContainer> 
            {/*
           */} 
             <div className="search">

      <input
        type="text"
        placeholder="Найти..."
        style={{width:"100%", backgroundColor:"transparent", border:"none", outline:"none"}}
        value={searchValue}
        onChange={submitHandler}
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
                <HomePage searchValue={searchValue}  />
        </Container>
      </main>
        {/*
               <ProductList itemsFilter={itemsFilter}/>

      <div className="d-flex justify-content-between m-5"> 
      <Link style={{textDecoration:"none",marginRight:"1rem"}} to="/" className="hover-underline-animation">
                <h1>Каталог</h1>
      </Link>
     
                
      <Link style={{textDecoration:"none", marginLeft:"1rem"}}  to="/favorite" className="hover-underline-animation">
          <h1>Избранное</h1>
      </Link>
     </div>

      <footer>
      
      </footer>
      */}
    </div>
   </div>
  )
}

export default App
