import React from 'react'
import { useContext } from "react";
import { CartContext } from '../../context/ThemeContext/CartContext/CartProvider';
import { Link } from "react-router-dom";

const CartDetail = ( { cart } ) => {
    const { getTotal, getTotalProduct, removeItem, cleanCart, buy } = useContext(CartContext);

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
        <h3>Total productos: {getTotalProduct()}</h3>
        <h3>Total a pagar: ${getTotal()}</h3>
        <button onClick={cleanCart}>Vaciar Carrito</button>

        <Link to= {"/checkout"}>Comprar</Link>

    </div>
  )
}

export default CartDetail