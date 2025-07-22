import styled from "styled-components"

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
row-gap: 15px;
column-gap: 15px;
`

export const GridItem = styled.input`
aspect-ratio: 1 / 1;
caret-color: transparent;
background-color: black;
border-color:;
text-align:center;
font-size:200%;
border: 1px solid rgba(75, 75, 75, 1);
border-radius: 3%;

font-family: 'Press Start 2P', monospace;
color:white;
`

export const SolveButton = styled.button`
margin-top: 10px;
background:lightblue;

font-family: 'Press Start 2P', monospace;
`

export const Title = styled.h3`
text-align:center;
// background:red;
margin-top: 0px;
margin-bottom: 20px;
`