import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useContext } from "react";
import { CartContext } from "../../context/ThemeContext/CartContext/CartProvider";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
  const { addItems } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (quantity) => {
    addItems(product, quantity);
    setShowItemCount(false); //montado y desmontado de los contadores
  };
  return (
    <div>
        <img src={product.image} alt={product.image} />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>Stock: {product.stock}</p>
        <p>Categoria: {product.category}</p>

        {showItemCount ? (<ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>) 
        : (<Link to="/cart">Terminar Mi Compra♥</Link>)}
    </div>
  )
}

export default ItemDetail