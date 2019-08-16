import React from "react";
import styled from "styled-components";

const Name = styled.div`
font-size: 2rem;
color: #003beb;
text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
margin-bottom: 5px;
`

const Stats = styled.div`
font-size: 1rem;
color: white;
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

