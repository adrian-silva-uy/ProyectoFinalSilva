import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3050/3050238.png";
  return (
    <div>
      <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
        {
          totalQuantity > 0 && <strong> {totalQuantity} </strong>
        }
      </Link>      
    </div>
  );
};

export default CartWidget;
