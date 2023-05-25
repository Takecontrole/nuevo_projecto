// @ts-nocheck
import { useEffect, useState } from "react";
import FavoriteCard from "./FavoriteItem"

const FavoriteList = ({ itemsFilter }) => {
  

  return (
    <div>
      <h1>Избранное</h1>
 <div style={{display:"flex",flexWrap: "wrap", justifyContent:"center"}}  >
      { itemsFilter.map( product => {
        return <div style={{width:"300px", margin:"2rem"}}  key={product.title}> <div key={product.id} >
          <FavoriteCard product={product} />
        </div> </div>
      })}        
    </div>
    </div>
  );
};

export default FavoriteList;
