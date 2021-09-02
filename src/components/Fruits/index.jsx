import "./style.css";
import FruitList from "../FruitList";
import { useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };

  const totalPrice = fruits.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  return (
    <>
      <FruitList fruits={fruits} totalPrice={totalPrice} />
      <div>
        <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
      </div>
    </>
  );
};

export default Fruits;
