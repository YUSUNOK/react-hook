import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const plus = () => setItem((current) => ++current);
  const minus = () => setItem((current) => --current);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello CodeSandbox</h1>
        <h4>Start editing to see some magic happen!</h4>
        <p>{item}</p>
        <button onClick={() => plus()}>plus</button>
        <button onClick={() => minus()}>minus</button>


      </header>
    </div>
  );
}

export default App;
