// @ts-nocheck
import React, { useEffect, useState } from "react";
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductList from '../components/ProductList'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'

export default function HomePage({searchValue}) { 
  const [category, setCategory] = useState(""); 
  const { data: products, isLoading, error } = useGetProductsQuery(category!)
  {/*
 const [searchValue, setSearchValue] = useState(""); 
 
  

  const submitHandler = (e: React.SyntheticEvent) => {
    setSearchValue(e.target.value);
  }
  */}
  const itemsFilter = products?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ); 
 
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div>


        
    <div className="d-flex flex-column align-items-center justify-content-center">
   {/*
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
      */}
         <select className="mt-5" onChange={(e) => setCategory(e.target.value)}>
            <option disabled selected>
              категории
           </option>
            <option value="">Все</option>
            <option value="/category/women's clothing">Женская одежда</option>
            <option value="category/men's clothing">Мужская одежда</option>
            <option value="category/jewelery">Украшения</option>
            <option value="category/electronics">Электроника</option>
             </select> 
     </div>        
               <ProductList itemsFilter={itemsFilter}/>
     

    </div>
  )
}
