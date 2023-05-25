// @ts-nocheck
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem"
import {Row, Col} from "react-bootstrap"

const ProductList = ({ itemsFilter }) => {
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [ price, setPrice ] = useState(0);
 const [sort, setSort] = useState("asc");
  const handleInput = (e: React.SyntheticEvent)=>{
    setPrice( e.target.value );
  }
const handleFilters = (e: React.SyntheticEvent) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
    useEffect(() => {
      setFilteredProducts(
        itemsFilter.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [itemsFilter, filters]);
  useEffect(() => {
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else if (sort === "С начала") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.title.localeCompare(b.title))
      );
    } else if (sort === "С конца") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => (a === b ? 0 : a < b ? 1 : -1))
      );
    } else {
      
    }
  }, [sort]);

  return (
    <div>
    <div className="d-flex flex-column flex-md-row justify-content-around mt-5">
 
                 <div className="d-flex flex-column m-1">
              <p>Цены:</p>
         <select onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Сначала дешёвые</option>
            <option value="desc">Сначала дорогие</option>
                         </select>
            </div> 
               <div className="d-flex flex-column m-1">
   <p>По алфавиту:</p>                    <select  onChange={(e) => setSort(e.target.value)}>
            <option value="С конца">С конца</option>
            <option value="С начала">С начала</option>
             </select> 
             </div> 
     </div>
       <div style={{display:"flex",flexWrap: "wrap", justifyContent:"center"}}  >
      { filteredProducts.map( product => {
        return <div style={{width:"300px", margin:"2rem"}} key={product.title}> <div  key={product.id} >
          <ProductItem product={product} />
        </div> </div>
      })}        
      </div>
    </div>
  );
};

export default ProductList;
