import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/ThemeContext/CartContext/CartProvider";
import CartDetail from "../CartDetail/CartDetail";

const Cart = () => {
  const { cart, getTotal, getTotalProduct, removeItem, cleanCart, buy } = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito</p>)
        : (
          <div>
          <CartDetail cart={cart} />
          </div>
        )}
    </div>
  );
};

export default Cart;
