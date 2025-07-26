import styled, {keyframes} from "styled-components"


const flash = keyframes`
  0%   { opacity: 1; }
  40%  { opacity: 1; }
  50%  { opacity: 0; }
  60%  { opacity: 0; }
  100% { opacity: 1; }
`;

export const Message = styled.div`
position:absolute;
margin-top: 20vh;
font-size:150px;
color:red;
z-index:2;
text-align:center;
animation: ${flash} .8s steps(1, end) 3;
`