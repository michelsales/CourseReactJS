import { useState, useEffect } from 'react';
import './App.css';

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    //let wait = false;
    setLoading(true);
    
    const fetchData = async () => {
      await new Promise(r => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    } 
    fetchData();
  }, [url, options]);
    return [result, loading];
};

function App() {
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(result, loading)
  if(loading) {
    return <p>Loading...</p>
  }
  if(!loading && result) {
    console.log(result);
  }

  return (
    <div className="App">
      <h1>oi</h1>
    </div>
  );
}

export default App;
