// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup
} from "react-bootstrap";
import LoadingBox from '../components/LoadingBox'
import ProductList from '../components/ProductList'
import { getProducts } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils/utils'
export default function Home({value}) { 
  const [category, setCategory] = useState(""); 
  const { data: products, isLoading, error } = getProducts(category!)

  const filterd = products?.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase()) 
  ); 
 
  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <Alert variant="denger">{getError(error as ApiError)}</Alert>
  ) : (
    <div>
    <div className="d-flex flex-wrap align-items-center justify-content-around"> 
        <Button className="category-button" value="" onClick={(e) => setCategory(e.target.value)}>Все категории</Button>
      <Button className="category-button"  value="category/electronics" onClick={(e) => setCategory(e.target.value)} >Электротехника</Button>
        <Button className="category-button"  value="category/men's clothing" onClick={(e) => setCategory(e.target.value)}>Мужская одежда</Button>
        <Button className="category-button"  value="category/women's clothing" onClick={(e) => setCategory(e.target.value)}>Женская одежда</Button>
        <Button className="category-button"  value="category/jewelery" onClick={(e) => setCategory(e.target.value)}>Ювелирные украшения</Button>
   
     </div>        
               <ProductList filterd={filterd}/>
     

    </div>
  )
}
