import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { idCat } = useParams();

  useEffect(() => {
    const funcProducts = idCat ? getProductsByCategory : getProducts;

    funcProducts(idCat)
      .then((res) => setProducts(res))
      .catch((error) => console.log("Error al obtener los productos", error));
  }, [idCat]);

  return (
    <div>
      <h2>Listado de Artículos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
