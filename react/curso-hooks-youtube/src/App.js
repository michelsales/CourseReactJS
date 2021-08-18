import './App.css';
import React, {useState, useEffect, useDebugValue} from 'react';

function App() {
const [loading, response] = useFetch('https://api.github.com/users/michelsales');
const [loading2, response2] = useFetch('https://api.github.com/users/michelsaledsds');

if( loading ){
  return <h1>loading...</h1>
}

return (
    <div className="App">
      <p>{JSON.stringify(response)}</p>
    </div>
  );
};

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();
      
      setLoading(false);
      setResponse({json, status: resp.status});
    })();
  }, [url]);

  useDebugValue(response?.status, (message) => {
      return `Mensagem: ${message}`;
  } );

  return [loading, response];
}

export default App;

