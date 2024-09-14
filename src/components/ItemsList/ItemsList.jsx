import React from 'react'
import Item from "../Item/Item"
import "./ItemsList.css"
import { Link } from "react-router-dom"

const ItemsList = ({products}) => {
  return (

    <Link className="card-container">
        {products.map((item)=> (
      <Item key={item.id} item={item}/>
    ))}
    </Link>
  )
}

export default ItemsList