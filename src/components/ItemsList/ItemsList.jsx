import React from 'react'
import Item from "../Item/Item"
import "./ItemsList.css"
import { Link } from "react-router-dom"

const ItemsList = ({products}) => {
  return (
<<<<<<< HEAD

    <Link className="card-container">
        {products.map((item)=> (
=======
    <div className="card-container">
    {products.map((item)=> (
>>>>>>> refs/remotes/origin/main
      <Item key={item.id} item={item}/>
    ))}
    </Link>
  )
}

export default ItemsList