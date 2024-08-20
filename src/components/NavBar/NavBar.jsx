import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MI LOGO</Link>
      </div>

      <div className="navbar-links">
        <ul>
          <li><Link to="/category/Apple" className="link">Apple</Link></li>
          <li><Link to="/category/contact" className="link">Contacto</Link></li>
        </ul>
      </div>

      <CartWidget/>
    </nav>
  );
};

export default NavBar;
