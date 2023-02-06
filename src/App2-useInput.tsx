import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const useInput = (initialValue: string, validater: Function) => {
  const [value, setValue] = useState(initialValue);
  const placeholder = useState(value)[0];
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validater(value)) {
      setValue(event.target.value);
    }

  }
  return { placeholder, value, onChange };
}

function App() {
  const maxLen = (input: string) => input.length < 10;
  // const name = useInput("Mr.", maxLen);
  // console.log({ ...name });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello CodeSandbox</h1>
        <h4>Start editing to see some magic happen!</h4>
        {/* <input {...name} /> */}
        <input {placeholder : "hello", value : "hi"}/>

      </header>
    </div>
  );
}

export default App;
