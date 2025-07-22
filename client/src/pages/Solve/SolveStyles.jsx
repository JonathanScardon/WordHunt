import styled, { keyframes } from 'styled-components';

export const SolveContainer = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top: 6%;
z-index:1;
position:relative;
`

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


export const SolutionDisplay = styled.div`
display: flex;
justify-content: space-between;
`

const flash = keyframes`
  0%   { opacity: 1; }
  40%  { opacity: 1; }
  50%  { opacity: 0; }
  60%  { opacity: 0; }
  100% { opacity: 1; }
`;

export const Title = styled.h2`
  padding: 2% 1%;
  text-align: center;

  animation: ${flash} .8s steps(1, end) 3;
`;
