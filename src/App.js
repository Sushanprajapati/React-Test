import React, {useState} from 'react';
import './App.css';
import Tweet from './Tweet';

function App() {
  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);

  const [users,setUser] = useState([
    {
      name : "Sushan",
      designation :  "Senior Software Developer"
    },
    {
      name : "Sanjay",
      designation :  "Senior Software Tester"
    },
    {
      name : "Suyes",
      designation :  "Full Stack Developer"
    },
    {
      name : "Ankit",
      designation :  "Junior Developer"
    },
  ]);

  function increment(){
    setCount(count + 1);
    setRed(!isRed);
  }
  return (
    <div className="App">
      
        { users.map(user => (
          <Tweet name={user.name} designation={user.designation} /> 
        ))}

    </div>
  );
  //Above className for h1 is defined using the ifElse condition. 
  //We are calling another component named "Tweet". We are passing the name and message parameters to render those.
}

export default App;
