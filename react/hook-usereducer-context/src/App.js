import { useEffect, useRef, useState } from 'react';
import './App.css';

const useMyHook = (cb, delay = 1000) => {
  const savedcCb = useRef();

  useEffect(() => {
    savedcCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      cb();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

//App.jsx
function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1> Delay: {delay}</h1>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  );
}

export default App;
