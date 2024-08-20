import React from 'react'
import Item from "../Item/Item"
import "./ItemsList.css"

const ItemsList = ({product}) => {
  return (
    <div className="card-container">
    {product.map((item)=> (
      <Item key={item.id} item={item}/>
    ))}
    </div>
  )
}

export default ItemsList