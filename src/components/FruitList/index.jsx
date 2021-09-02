const FruitList = ({ fruits, totalPrice }) => {
  return (
    <div>
      <p>Preço total = {totalPrice}</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
