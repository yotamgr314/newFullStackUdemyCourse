import React, { useState } from "react"; 
import "./Parent.css"; // Import CSS specific to the Parent component
import Child from "../Child/Child"; // Correct path to the Child component

function Parent() { 
  const [word, setWord] = useState("Bob"); 

  return (
    <div className="parent"> 
    <h1>{word}</h1> 
    <Child changeWord={(word) => setWord(word)} /> 
    </div>
  );
}

export default Parent; 
