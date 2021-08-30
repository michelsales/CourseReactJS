import "./app.css";
import React from "react";
import Interval from "./components/Interval";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-redux</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
}

export default App;
