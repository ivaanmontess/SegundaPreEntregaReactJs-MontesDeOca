import React from 'react'
import Item from "../Item/Item"
import "./ItemsList.css"

const ItemsList = ({products}) => {
  return (
    <div className="card-container">
    {products.map((item)=> (
      <Item key={item.id} item={item}/>
    ))}
    </div>
  )
}

export default ItemsList