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
`

export const SolveButton = styled.button`
margin-top: 10px;
background:lightblue;
`