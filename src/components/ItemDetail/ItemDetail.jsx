import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
const ItemDetail = ({ id, articulo, precio, descripcion, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { addToCart } = useContext(CartContext);

  const quantityHandler = (quantity) => {
    setAgregarCantidad(quantity);
    //console.log("Productos Agregados: " + quantity);

    const item = { id, articulo, precio };
    addToCart(item, quantity);
  };

  return (
    <div className="cardItem">
      <h2>Artículo: {articulo} </h2>
      <h3>Precio: $ {precio}</h3>
      <h3>ID: {id} </h3>
      <p>Descripción: {descripcion} </p>
      <img className="imgProducto" src={img} alt={articulo} />
      <hr />
      {agregarCantidad > 0 ? (
        <><Link to="/cart"> Terminar Compra </Link>
          <br />
          <Link to="/"> Continuar Comprando </Link></>
      ) : (
        <ItemCount initial={1} stock={stock} addFunction={quantityHandler} />
      )}
    </div>
  );
};

export default ItemDetail;
