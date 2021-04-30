import React, {useState} from 'react';
import './App.css';

function Tweet(props) {
    //Instead of using the props, we can directly specify the required parameters ie. Tweet({name,message})

  return (
    <div className="Tweet col-12">
      <h3> {props.name}</h3>
      <p> {props.designation}</p>
    </div>
  );
  //Above className for h1 is defined using the ifElse condition. 
  //We are calling another component named "Tweet". We are passing the name and message parameters to render those.
}

export default Tweet;
