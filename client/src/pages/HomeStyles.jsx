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
width:30%;
height:auto;
image-rendering: pixelated;
margin-top: 25vh;
z-index: 1
`
