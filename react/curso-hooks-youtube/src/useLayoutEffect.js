import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
   
  useEffect(() => {
    console.log('useEffect 1');
  },[]);

    useEffect(() => {
    console.log('useEffect 2');
  },[]);

  useEffect(() => {
    console.log('useEffect 3');
  },[]);
  
  useLayoutEffect(() => {
    console.log('uselayout Effect');
  },[]);

  function handlePlus(){
    setCounter((prevState) => prevState + 1);
}

return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={ handlePlus }>+</button>
    </div>
  );
};

export default App;

