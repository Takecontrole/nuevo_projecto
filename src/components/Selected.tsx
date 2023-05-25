// @ts-nocheck
import { useEffect, useState } from "react";
import SelectedItem from "./SelectedItem"

const SelectedList = ({ filterd }) => {
  

  return (
    <div>
      <h1>Избранное</h1>
 <div style={{display:"flex",flexWrap: "wrap", justifyContent:"center"}}  >
      { filterd.map( product => {
        return <div style={{width:"300px", margin:"2rem"}}  key={product.title}> <div key={product.id} >
          <SelectedItem product={product} />
        </div> </div>
      })}        
    </div>
    </div>
  );
};

export default SelectedList;
