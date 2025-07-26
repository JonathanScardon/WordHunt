import styled from "styled-components"

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
`

export const Modal = styled.div`
padding: 2rem;
border-radius: 1rem;
max-width: 500px;
text-align: center;
border: 2px solid white;
background:black;
`

export const Instructions = styled.div`
line-height: 1.5;
`

export const Button = styled.button`
margin-top: 30px;
border: None;
border-radius: 2px;
cursor: pointer;
font-family: inherit;
color: inherit;
background: rgb(73, 0, 255);
padding: 2% 1% 2% 1%;
box-shadow: inset 0px 5px #ffffff16;

&:hover{
box-shadow: inset 0px 5px #ffffff4c;
background:rgb(0, 197, 255);
}

&:active{
box-shadow: inset 0px 5px #ffffff4c;
background: rgba(0, 149, 194, 1);
}
`