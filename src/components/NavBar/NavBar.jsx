import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>El Revoltijo Online</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to={"/categoria/1000"}> Almacén</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/2000"}> Electrodomésticos </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/3000"}> Muebles </NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/4000"}> Motos </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget></CartWidget>
    </header>
  );
};

export default NavBar;
