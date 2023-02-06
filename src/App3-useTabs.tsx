import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const content = [
  {
    tab: "Section 1",
    content: "1"
  },
  {
    tab: "Section 2",
    content: "2",
  }
]

const useTabs = (initialize: number) => {
  const [nowIndex, setNowIndex] = useState(initialize);
  return {
    nowContent: content[nowIndex],
    setNowIndex
  };
}


function App() {
  const { nowContent, setNowIndex } = useTabs(0);
  return (
    <div className="App">
      {content.map((section, index) => (<button onClick={() => setNowIndex(index)}>{section.tab}</button>))}
      <div>{nowContent.content}</div>
    </div>
  );
}

export default App;
