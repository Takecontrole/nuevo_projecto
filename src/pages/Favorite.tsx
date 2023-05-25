// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store'
import { FavoriteItem } from '../types/Favorite'
import FavoriteList from '../components/FavoriteList'
export default function FavoritePage() {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState(""); 
  const {
    state: {
      mode,
      favorite: { favoriteItems },
    },
    dispatch,
  } = useContext(Store)
  
  const submitHandler = (e: React.SyntheticEvent) => {
    setSearchValue(e.target.value);
  }
  const itemsFilter = favoriteItems?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ); 

  return ( 
   <div>
    <div className="d-flex flex-column align-items-center justify-content-center">
    <div className="search">

      <input
        type="text"
        placeholder="Поиск..."
        style={{width:"280px", padding:"10px", backgroundColor:"transparent", border:"none", outline:"none"}}
        value={searchValue}
        onChange={submitHandler}
      /> 
          <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
      </div>
 
     </div>     
 
               <FavoriteList itemsFilter={itemsFilter}/>
     

      </div>
   
  )
}
