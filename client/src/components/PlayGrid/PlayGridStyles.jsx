import { Link } from 'react-router-dom';
import styled from "styled-components"


export const GridItem = styled.div`
aspect-ratio: 1 / 1;
caret-color: transparent;
background-color: black;
border-color:;
font-size:200%;
border: 1px solid rgba(75, 75, 75, 1);
border-radius: 3%;

font-family: 'Press Start 2P', monospace;
color:white;

display: flex;
align-items: center;
justify-content: center;
`

export const PlayWrapper = styled.div`
z-index:1;
`

export const Button = styled.button`
width:11ch;
margin-top: 5%;
border: None;
font-family: inherit;
background: rgb(73, 0, 255);
padding: 2% 1% 2% 1%;
border-radius:2px;
cursor:pointer;
color:inherit;
box-shadow: inset 0px 5px #ffffff16;
margin-left: auto;
display: block;

&:hover{
box-shadow: inset 0px 5px #ffffff4c;
background:rgb(0, 197, 255);
}

&:active{
box-shadow: inset 0px 5px #ffffff4c;
background: rgba(0, 149, 194, 1);
}
`

export const StyledLink = styled(Link)`
text-decoration: none;
color: white;
cursor: pointer;
`;