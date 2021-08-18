import './App.css';
import React, { useState, useEffect } from 'react';
import { concatSeries } from 'async';

function App() {
 const [counter, setCounter] = useState(0);
 const [name, setName] = useState('');

 function handlePlus(){
   setTimeout(() => {
     setCounter((prevState) => prevState + 1);
    }, 2000)
  }
  
  function handleMinus(){
    setTimeout(() => {
     setCounter((prevState) => prevState + 1);
    }, 2000)
  }
  
  useEffect(() =>{
    console.log('first render');
  }, []);

  useEffect(() =>{
    console.log('counter')
  }, [counter]);
  
  useEffect(() =>{
    console.log('name')
  }, [name]);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button><br/>

      <input type="text" onChange={e => setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  );
}

export default App;
