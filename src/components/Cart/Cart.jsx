import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/ThemeContext/CartContext/CartProvider";
import CartDetail from "../CartDetail/CartDetail";

const Cart = () => {
  const { cart, getTotal, getTotalProduct, removeItem, clearCart, buy } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>)
        : (
          <div>
            <CartDetail cart={cart} />
            <h3>Total productos: {getTotalProduct()}</h3>
            <h3>Total a pagar: ${getTotal()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={buy}>Comprar</button>
          </div>
        )}
    </div>
  );
};

export default Cart;