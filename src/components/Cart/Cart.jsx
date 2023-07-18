import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
  const { cart, clearCart, totalPrice, totalQuantity } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to={"/"}>Ver Productos</Link>
      </>
    );
  }
  return (
    <div>
      {cart.map((Item) => (
        <CartItem key={Item.id} {...Item} />
      ))}
      
      <h3>Cantidad de artículos: {totalQuantity} </h3>
      <h3>Importe Total: $ {totalPrice} </h3>
      

      <button onClick={() => clearCart()}> Vaciar Carrito</button>
      <br /><br />
      <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  );
};

export default Cart;
