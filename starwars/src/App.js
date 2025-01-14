import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import Comp from "./components/component";
import Buttons from "./components/buttons";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [char, setChar] = useState([]);
  useEffect(() => {
  axios.get("https://swapi.co/api/people/")
  .then(response => {
    //console.log(response)
    setChar(response.data.results);
    console.log(char)
    //setChar(starChar);
    
    
  });
}, []);

  return (
    
    
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {char.map((person, index) => {
       return <Comp 
                    name = {person.name} 
                    height = {person.height}
                    gender = {person.gender}
                    birth_year = {person.birth_year}
                    mass = {person.mass}
                    key = {index}/>;
                    
      })}

    <Buttons />
    </div>
  );
}

export default App;

/*
{char.map(person => {
  return <Comp name = {person.name} gender = {person.gender}/>;
})}

 {char.map((person, index) => {
       return <Comp name = {person.name} key ={index}/>;
      })}
       

*/