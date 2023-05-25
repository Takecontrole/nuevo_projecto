// @ts-nocheck
import React, { useEffect, useState } from "react";
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductList from '../components/ProductList'
import { useGetProductsQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import {
  Button,
  ButtonGroup
} from "react-bootstrap";
export default function HomePage({searchValue}) { 
  const [category, setCategory] = useState(""); 
  const { data: products, isLoading, error } = useGetProductsQuery(category!)

  const itemsFilter = products?.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()) 
  ); 
 
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div>
    <div className="d-flex flex-wrap align-items-center justify-content-around"> 
        <Button className="category-button" value="" onClick={(e) => setCategory(e.target.value)}>Все категории</Button>
      <Button className="category-button"  value="category/electronics" onClick={(e) => setCategory(e.target.value)} >Электротехника</Button>
        <Button className="category-button"  value="category/men's clothing" onClick={(e) => setCategory(e.target.value)}>Мужская одежда</Button>
        <Button className="category-button"  value="category/women's clothing" onClick={(e) => setCategory(e.target.value)}>Женская одежда</Button>
        <Button className="category-button"  value="category/jewelery" onClick={(e) => setCategory(e.target.value)}>Ювелирные украшения</Button>
   
     </div>        
               <ProductList itemsFilter={itemsFilter}/>
     

    </div>
  )
}
