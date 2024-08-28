import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <img src={product.image} alt={product.image} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Categoria: {product.category}</p>

        <ItemCount initial={1} stock={product.stock}/>
        
    </div>
  )
}

export default ItemDetail