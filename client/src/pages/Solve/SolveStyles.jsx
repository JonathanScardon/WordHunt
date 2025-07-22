import styled from "styled-components"

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

export const Title = styled.h2`
// background:purple;
text-align:center;
margin-bottom: 8%;
`
