import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //FUNCIONES DEL CARRITO DE COMPRAS
  const [cart, setCart] = useState([]);

  const addItems = (product, quantity) => { 
    if(isInCart(product.id)){
      setCart(
        cart.map((item) =>
        item.product.id === product.id ? {...item,quantity: item.quantity + quantity} : item )
      )
    } else{
      setCart([...cart, {product, quantity}]);
    }
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.product.id === productId);
  };

  const clearCart = () => { 
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getTotalProduct = () => {
    return cart.reduce((total, item) => total + item.quantity , 0);
  };

  const removeItem = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };



  return <CartContext.Provider value={{cart, addItems, isInCart, clearCart, getTotal, getTotalProduct, removeItem }}>{children}</CartContext.Provider>;
};

export default CartProvider;
