import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";

const ItemDetailContainer = () => {
  const [item, setProduct] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "productos", idItem);

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newItem = { id: res.id, ...data };
        setProduct(newItem);
      })
      .catch(error => console.log(error))
  }, [idItem])

  return (
    <div>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
