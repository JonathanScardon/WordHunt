import styled from "styled-components"


export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
row-gap: 15px;
column-gap: 15px;
`

export const Title = styled.h3`
text-align:center;
margin-top: 0px;
margin-bottom: 20px;
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
z-index: -1;
`

export const SolveContainer = styled.div`
margin-left: 20%;
margin-right: 20%;
margin-top: 6%;
z-index:1;
position:relative;
`

export const SolutionDisplay = styled.div`
display: flex;
justify-content: space-between;
`