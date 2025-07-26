import styled from 'styled-components';


export const Background = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: auto;
  max-width: 1440px;
  max-height: 900px;
  transform: translate(-50%, -50%);
  image-rendering: pixelated;
  z-index: 0;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const Logo = styled.img`
width:65%;
height:auto;
image-rendering: pixelated;
margin-top: 10vh;
z-index: 1
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
box-shadow: inset 0px 10px #ffffff16;

font-size:30px;
width: 6ch;
height:auto;

&:hover{
box-shadow: inset 0px 10px #ffffff4c;
background: rgb(0, 197, 255);
}

&:active{
box-shadow: inset 0px 10px #ffffff4c;
background: rgba(0, 149, 194, 1);
}

`

export const ButtonContainer = styled.div`
display:flex;
flex-direction: row;
gap: 30px;
`