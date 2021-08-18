import './App.css';
import React, { useState, useMemo } from 'react';


function App() {
const [counter, setCounter] = useState(1);
const [name, setName] = useState('');

const total  = useMemo(() => {
    console.log('usememo rodou');
    return (counter * 52151561 * 5965656 * 1515151);
}, [counter]);

function handlePlus(){
    setCounter((prevState) => prevState + 1);
};

return (
    <div className="App">
      <h1>{counter}</h1>
      <h4>{total}</h4>
      <button onClick={handlePlus}>+</button>
      <br/><br/>
      <span>{name}</span><br/>
      <input onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;

