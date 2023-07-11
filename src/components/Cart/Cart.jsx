import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import Item from "../Item/Item";

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
      <h3>Total: $ {totalPrice} </h3>
      <h3>Cantidad Total: {totalQuantity} </h3>

      <button onClick={() => clearCart()}> Vaciar Carrito</button>
      <Link to="/checkout"> Finalizar Compra </Link>
    </div>
  );
};

export default Cart;
