import './App.css';
import React, { createContext, useContext } from 'react';

const themeContext = createContext();

function App() {
  return (
    <div className="App">
      <themeContext.Provider value={{ mode: 'dark' }}>
        <Button/>
      </themeContext.Provider>
    </div>
  );
}

function Button(){
  const theme = useContext(themeContext);

    return(
      <button>{theme.mode}</button>
    );
}

export default App;
