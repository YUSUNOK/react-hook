import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const useTitle = (initialize: string) => {
  const [titleValue, setTitleValue] = useState(initialize);
  const title: HTMLTitleElement | null = document.querySelector('title');
  const change = () => {
    if (title) { title.innerText = titleValue }
  };
  useEffect(change, [titleValue]); // useTitle이 리턴되는 순간 여기있는 useEffect는 사라진다.
  return {
    setTitleValue
  }
}


// Loading... ---> Home 
function App() {
  const { setTitleValue } = useTitle("Loading");
  window.setTimeout(() => setTitleValue("Home"), 5000)
  return (
    <div className="App">

    </div>
  );
}

export default App;
