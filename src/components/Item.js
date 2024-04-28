import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);
  const itemClass= inCart ? "in-cart" : ""
  const itemContent=inCart ? "Remove from Cart" : "Add to Cart"

  function handleItemClass (){
    setInCart((inCart)=> !inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"
      onClick={handleItemClass}>
      {itemContent}</button>
    </li>
  );
}

export default Item;
