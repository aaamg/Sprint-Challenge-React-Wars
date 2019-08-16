import React from "react";
import styled from "styled-components";



const Button = styled.button`
color: palevioletred;
background-color: #FBBFE3;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
font-color: cyan;
`;

const TomatoButton = styled(Button)`
color: tomato;
border-color: tomato;
`;

const A = styled.a`
text-decoration: none;
font-color: cyan;
`;

function Buttons(){
    return (
        <div>
        <Button> <A href="https://swapi.co/about" target="_blank">About Star Wars API</A></Button>
        <TomatoButton> <A href="https://swapi.co/" target="_blank">Link to Start SWAPI!</A></TomatoButton>
        </div>
    )
}
//<div className="character">{props.name}</div>
//exporting data-

export default Buttons;