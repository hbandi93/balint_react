import { useState } from "react/cjs/react.development";

const cars = [
  { brand: "Toyota", model: "yaris", topSpeed: "190km/h" },
  { brand: "Mercedes", model: "C63", topSpeed: "260km/h" },
  { brand: "Mazda", model: "6", topSpeed: "210km/h" },
  { brand: "Mazda", model: "Civic", topSpeed: "200km/h" },
  { brand: "Audi", model: "A4", topSpeed: "220km/h" },
]

const App = () => {
  let [inputValue, setInputValue] = useState("Szöveg");
  console.log("render");
  console.log(inputValue);

  // const transformToDiv = (carObject) => <div>{carObject.brand} - {carObject.model} ({carObject.topSpeed})</div>

  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
      <button disabled={inputValue.length < 3}>Submit</button>
      {inputValue.length < 3 && <div>Char legth needs to be at least 3</div>}
      {/*inputValue.length >= 3 ? <button>Submit</button> : <button disabled>Submit</button>} */}
      <hr />
      {cars.filter(car => car.brand.startsWith(inputValue)).map(car => <div key={car.model}>{car.brand} - {car.model} ({car.topSpeed})</div>)}
      {/* {cars.filter(car => car.brand.slice(0, inputValue.length) === inputValue).map(car => <div key={car.model}>{car.brand} - {car.model} ({car.topSpeed})</div>)} */}

    </div>
  );
}

export default App;
