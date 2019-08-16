import React from "react";
import styled from "styled-components";

const Name = styled.div`
font-size: 2rem;
color: cyan;
margin-bottom: 5px;
`

const Stats = styled.div`
font-size: 1rem;
margin-bottom: 30px;
`


function Comp(props) {
  //console.log("Component rendered");
  //normal JSX part
  return (
    <div className="contain">
      <Name className="character">{props.name} || {props.gender} </Name>
      
      <Stats className="gender">Birth year: {props.birth_year} || Height: {props.height} || Weight: {props.mass}</Stats>
        </div>
  );
}

//<div className="character">{props.name}</div>
//exporting data-
export default Comp;

