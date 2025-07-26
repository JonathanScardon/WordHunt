import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 40vh;
font-size: 30px;
font-family: 'Press Start 2P', monospace;
`;

const bounce = keyframes`
0%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-10px);
}
`;

export const Dot = styled.span`
display: inline-block;
animation: ${bounce} 1.2s infinite;
animation-delay: ${({ $delay }) => $delay}s;
`;
