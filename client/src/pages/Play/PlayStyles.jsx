import styled from "styled-components"

export const PlayContainer = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top: 6%;
z-index:1;
position:relative;
border:solid;
`

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
row-gap: 15px;
column-gap: 15px;
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