import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ItemCount = ({initial, stock, addFunction}) => {
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
      <div>
        <button onClick={decrement}> - </button>
        <p> {counter} </p>
        <button onClick={increment}> + </button>
      </div>
      <button onClick={() => addFunction(counter)}> Agregar al Carrito </button>
    </>
  );
};

export default ItemCount;

