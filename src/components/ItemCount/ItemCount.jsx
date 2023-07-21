import { useState } from "react"
import "./ItemCount.css"

// eslint-disable-next-line react/prop-types
const ItemCount = ({ initial, stock, addFunction }) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className="item-count">
        <button className="minus-button" onClick={decrement}> - </button>
        <p className="input" style={{padding:"10px"}}> {counter} </p>
        <button onClick={increment}> + </button>
      </div>
      <hr></hr>
      <button className="plus-button" onClick={() => addFunction(counter)}> Agregar al Carrito </button>
    </>
  );
};

export default ItemCount;

