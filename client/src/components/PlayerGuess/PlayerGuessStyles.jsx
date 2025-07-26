import styled from "styled-components"

export const GuessContainer = styled.div`
display:flex;
flex-direction:row;
margin-top: 2%;
align-items:center;
justify-content: center;
// background:red;
`

export const InputBox = styled.input`
aspect-ratio: 6 / 1;
font-family: 'Press Start 2P', monospace;
background:black;
color:white;
border: 1px solid rgba(221, 221, 221, 1);
border-radius: 2px;
text-align:center;
font-size:110%;
width: 35%;

&:focus{
box-shadow: 0 0 2px 2px white;
border:none;
outline:none;
}
`