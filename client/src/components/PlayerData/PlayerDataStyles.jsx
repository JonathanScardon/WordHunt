import styled, {keyframes} from "styled-components"

export const DataContainer = styled.div`
display:flex;
flex-direction: column;
margin-top:.5%;
margin-bottom: 1.5%;
`

const pop = keyframes`
0% {transform: scale(1);}
50% {transform: scale(1.5)}
100% {transform: scale{1}}
`

export const DataAnimation = styled.span`
display: inline-block;
transition: transform 0.2s ease;
margin-top:5%;

font-size: 20px;

&.pop {
animation: ${pop} 300ms ease;
}
`