import './App.css';
import React, { useRef } from 'react';

function App() {

console.log('rendered');

const inputRef = useRef(null);

function handlePrintName(){
  alert(inputRef.current.value);
  inputRef.current.focus();
};

return (
    <div className="App">
      <input ref={inputRef} /> 
       <button onClick={handlePrintName}>Print value</button>
    </div>
  );
}

export default App;

