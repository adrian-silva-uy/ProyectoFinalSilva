import "./Item.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Item = ({ id, categoria, artículo, marca, precio, stock, img }) => {
  return (
    <div className="cardProducto">
      <img className="imgProducto" src={img} alt={artículo} />
      <h3> {artículo} </h3>
      <strong> Categoría: {categoria} </strong>
      <p>Marca: {marca} </p>
      <p>Precio: $ {precio} </p>
      <p>ID: {id} </p>
      <p>Stock: {stock} </p>
      <Link to={`/item/${id}`}> Ver Detalles </Link>
    </div>
  );
};

export default Item;
