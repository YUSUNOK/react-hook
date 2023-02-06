import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App() {
  const sayHello = () => {
    console.log("sayHello");
  }
  const [value, setValue] = useState(0);
  const [bvalue, setbValue] = useState(0);
  // useEffect(sayHello,): 의존성이 없어서 리렌더링 될때마다 실행
  // useEffect(sayHello,[]) : 의존성이 바뀌지 않으니까 최초 한번만 실행
  //useEffect(sayHello, [value]) : value값이 바뀔 때마다 실행
  // useEffect(sayHello,[value, bvalue]) : value, bvalue 값 중 하나라도 바뀔 때마다 실행 
  return (
    <div className="App">
      <button onClick={() => setValue((current) => ++current)}>{value}</button>
      <button onClick={() => setbValue((current) => --current)}>{bvalue}</button>
    </div>
  );
}

export default App;
