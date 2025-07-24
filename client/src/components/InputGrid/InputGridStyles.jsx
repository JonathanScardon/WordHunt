import styled from "styled-components"


export const GridItem = styled.input`
aspect-ratio: 1 / 1;
caret-color: transparent;
background-color: black;
border-color:;
text-align:center;
font-size:200%;
border: 1px solid rgba(75, 75, 75, 1);
border-radius: 3%;

font-family: 'Press Start 2P', monospace;
color:white;
`

export const Buttons = styled.div`
display: flex;
justify-content:right;
gap:5%;
`

export const Button = styled.button`
margin-top: 5%;
border: None;
font-family: "Press Start 2P", monospace;
background: rgb(73, 0, 255);
padding: 2% 1% 2% 1%;
border-radius:2px;
cursor:pointer;
color:white;
box-shadow: inset 0px 5px #ffffff16;

&:hover{
box-shadow: inset 0px 5px #ffffff4c;
background:rgb(255, 0, 0);
}

&:active{
box-shadow: inset 0px 5px #ffffff4c;
background:rgba(178, 0, 0, 1);
}

`