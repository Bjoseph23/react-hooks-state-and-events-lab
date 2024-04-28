import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory, setSelected]= useState("All") // Set the initial value of the category to all to match the first option
  const shoppingCategory= items.filter((item)=>{ //Check if the value selected is equal to thecategory in the array
    if(selectedCategory ==="All"){
      return true
    } else{
      return item.category===selectedCategory
    }
  })
  function handleFilter(event){
    setSelected(event.target.value)
  } 
  //Used to list the items 
  const itemCategory=shoppingCategory.map((item) => (
    <Item 
    key={item.id}
    name={item.name}
    category={item.category} />
 ))
  return ( //Returns the options list of items eith the category matching the value selected
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items"> {itemCategory}
      </ul>
    </div>
  );
}

export default ShoppingList;
