// CartDetail.js
import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../context/ThemeContext/CartContext/CartProvider';
import { Link } from "react-router-dom";

const CartDetail = () => {
  const { cart, getTotal, getTotalProduct, removeItem, cleanCart, buy, checkout } = useContext(CartContext);

  if (checkout) {
    return (
      <div>
        <h2>Gracias por tu compra!</h2>
        <p>Tu orden ha sido procesada con éxito.</p>
      </div>
    );
  }

  return (
    <div>
        <h2>
            Carrito de compras
        </h2>
        {cart.map((item) => (
            <div key= {item.product.id}>
                <p>{item.product.name}</p>
                <p>Cantidad : {item.quantity}</p>
                <p>Precio: ${item.product.price}</p>

                <button onClick ={() => removeItem(item.product.id)}>Eliminar todo</button>
            </div>
        ))}
        

    </div>
  )
}

export default CartDetail