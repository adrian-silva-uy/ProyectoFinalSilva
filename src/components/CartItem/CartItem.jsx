import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
const CartItem = ({ item, quantity }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h4>{item.artículo}</h4>
      <p> Cantidad: {quantity} </p>
      <p> Precio: {item.precio} </p>
      <button onClick={() => removeFromCart(item.id)}> Eliminar </button>
      <hr />
    </div>
  );
};

export default CartItem;
