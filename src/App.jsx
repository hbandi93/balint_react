import { useState } from "react/cjs/react.development";

let [inputValue, setInputValue] = useState("Szöveg");
console.log("render");

const App = () => {
  console.log(inputValue);
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
    </div>
  );
}

export default App;
