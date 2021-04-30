import React, {useState} from 'react';
import './App.css';

function App() {
  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);

  function increment(){
    setCount(count + 1);
    setRed(!isRed);
  }
  return (
    <div className="App">
      <h1 className = {isRed ? "red" : " "}>This is the toggling Red text for ODD count</h1> 
      <button onClick={increment}>Increase the Count</button>
      <h1>{count}</h1>
    </div>
  );
  //Above className for h1 is defined using the ifElse condition. 
}

export default App;
