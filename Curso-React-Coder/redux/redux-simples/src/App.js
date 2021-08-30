import "./app.css";
import React, { useState } from "react";
import Interval from "./components/Interval";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  const [min, setMin] = useState(200);
  const [max, setMax] = useState(3000);

  return (
    <div className="App">
      <h1>Exercicio React-redux</h1>
      <div className="linha">
        <Interval min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/>
      </div>
      <div className="linha">
        <Media min={min} max={max}/>
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
