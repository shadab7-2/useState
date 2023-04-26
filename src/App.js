//import CounterApp from './counter-app/counterApp';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] =  useState(0)
  function increase(){
    setData(data + 1)
  }
  function decrease(){
    setData(data - 1)
    if(data === 0){
      setData(0)
    }
  }
  
  return (
    <div className="counter">
      <h1>counter app</h1>
      <h2>Count :[ {data} ]</h2>
      <button onClick={increase}>Increase</button>
      <button onClick ={decrease}>Decrease</button>


    </div>
  );
}

export default App;
