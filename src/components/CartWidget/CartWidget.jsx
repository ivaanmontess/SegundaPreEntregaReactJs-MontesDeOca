import "./CartWidget.css"
import { BsCartCheck } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/ThemeContext/CartContext/CartProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalProduct } = useContext(CartContext);

  return (
    <Link to={"/cart"} className="cart-widget">
        <BsCartCheck />
        {getTotalProduct() === 0 ? null : getTotalProduct()}
    </Link>
  )
}

export default CartWidget