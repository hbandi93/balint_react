import { useState } from "react"

const App = () => {
  let [isLandingPage, setterF] = useState(true);

  return (
    <div>
      <p>Hello</p>
      <button onClick={() => setterF(!isLandingPage)}>Click me!</button>
      {isLandingPage ? <div>Landing page</div> : <div>Homepage</div>}
      <div>

      </div>
    </div>
  );
}

export default App;
