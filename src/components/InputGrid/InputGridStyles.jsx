import styled from "styled-components"

export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
`

export const GridItem = styled.input`
aspect-ratio: 1 / 1;
`