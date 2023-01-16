import "./App.css";
import Load from "./frame/Load";
import Land from "./frame/Land";
import Me from "./frame/Me";
import { useState } from "react";
import Nav from "./frame/Nav";
import Bars from "./frame/Bars";
import Projects from "./frame/Projects";

function App() {
  const [state, setState] = useState(0);

  return (
    <div className="app">
      {state === 0 ? <Load setState={setState} /> : null}
      {state === 1 ? (
        <>
          <Nav />
          <Land />
          <Me />
          <Bars />
          <Projects />
        </>
      ) : null}
    </div>
  );
}

export default App;
