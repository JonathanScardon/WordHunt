import styled from "styled-components"

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
row-gap: 15px;
column-gap: 15px;
margin-top: 2%;
margin-bottom: 3%;
`

export const GridItem = styled.div`
aspect-ratio: 1 / 1;
caret-color: transparent;
background-color: black;
border-color:;
font-size:200%;
border: 1px solid rgba(75, 75, 75, 1);
border-radius: 3%;

font-family: 'Press Start 2P', monospace;
color:white;

display: flex;
align-items: center;
justify-content: center;
`

export const Title = styled.h3`
text-align:center;
margin-top: 0px;
margin-bottom: 20px;
`