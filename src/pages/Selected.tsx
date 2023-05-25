// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import { Nav, Navbar, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MessageBox from '../components/MessageBox'
import { Store } from '../utils/Store'
import { FavoriteItem } from '../types/Favorite'
import SelectedList from '../components/Selected'
export default function Selected() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState(""); 
  
  const {
    state: {
      cart,
      mode,
      favorite: { favoriteItems },
    },
    dispatch,
  } = useContext(Store)
  
  const submitHandler = (e: React.SyntheticEvent) => {
    setSearchValue(e.target.value);
  }
  const filterd = favoriteItems?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ); 

  return ( 
   <div>
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
               <SelectedList filterd={filterd}/>
     

      </div>
   
  )
}
