import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
        <i className="bi bi-phone" /> 
      </Link>

      </div>

      <div className="navbar-links">
        <ul>
          <li><NavLink to="/category/apple" className={({isActive}) => (isActive ? "link active" : "link")}>Apple</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => (isActive ? "link active" : "link")}>Contacto</NavLink></li>
        </ul>
      </div>

      <CartWidget/>
    </nav>
  );
};

export default NavBar;
