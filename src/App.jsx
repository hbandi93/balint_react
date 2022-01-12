import { useState } from "react/cjs/react.development";


const App = () => {
  let [inputValue, setInputValue] = useState("Szöveg");
  console.log("render");
  console.log(inputValue);
  return (
    <div>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
    </div>
  );
}

export default App;
