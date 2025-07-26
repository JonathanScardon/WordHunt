import styled from "styled-components"


export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(10px, 100px));
row-gap: 15px;
column-gap: 15px;
position:relative;
`

export const Title = styled.h3`
text-align:center;
margin-top: 0px;
margin-bottom: 30px;
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
z-index:-1;
`

export const SolveContainer = styled.div`
margin-left: 17%;
margin-right: 17%;
margin-top: 2%;
position:relative;
background-color:transparent;
z-index: 0;

@media (min-width: 1600px) {
margin-left: 20%;
margin-right: 20%;
}
`


export const SolutionDisplay = styled.div`
display: flex;
justify-content: space-between;
`