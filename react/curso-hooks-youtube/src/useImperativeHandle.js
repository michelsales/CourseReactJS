
import './App.css';
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

function App() {

const formRef = useRef(null);

function handleSubmit() {
  formRef.current.submit();
}

return (
    <div className="App">
      <Form ref={formRef}/>
       <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  
  function handleSubmit(){
    alert(inputRef.current.value);
  };

  useImperativeHandle(
    ref,
    () => {
      return{
        submit: handleSubmit,
      };
    },
    [],
  );

  return(
    <form>
      <input ref={inputRef}/>
    </form>
    );
});
