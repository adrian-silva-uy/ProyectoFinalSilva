import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { idCat } = useParams();

  useEffect(() => {
    const myProds = idCat ? query(collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos");

    getDocs(myProds)
      .then(resp => {
        const newProducts = resp.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProducts(newProducts);
      })
      .catch(error => console.log(error));
  }, [idCat])

  return (
    <div>
      <h2>Listado de Artículos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
