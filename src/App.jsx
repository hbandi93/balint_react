import { useState } from "react"

const App = () => {
  let [isLandingPage, setterF] = useState(true);

  let [pageName, setPageName] = useState("Home");

  return (
    <div>
      <p>Hülye react</p>
      <button onClick={() => setterF(!isLandingPage)}>Click me!</button>
      {isLandingPage ? <div>Landing page</div> : <div>Homepage</div>}
      <div>
        <hr />
        <button onClick={() => setPageName("Home")}>Home</button>
        <button onClick={() => setPageName("Landing")}>Landing</button>
        <button onClick={() => setPageName("About")}>About</button>
        {pageName === "Home" && <div>Text</div>}
        {pageName === "About" && <div>Text2</div>}
        {pageName === "Landing" && <div>Text3</div>}
      </div>
    </div>
  );
}

export default App;
