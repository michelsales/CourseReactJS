import './App.css';
import React, { useState, useCallback } from 'react';

const fnCounter = new Set();

function App() {
const [counter, setCounter] = useState(0);

const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
}, []);

return (
    <div className="App">
      <h1>{counter}</h1>
      <Button onClick={handlePlus}/>
    </div>
  );
}

function Button(props){
  return(
    <button onClick={props.onClick}>+</button>
  );
}

export default App;

