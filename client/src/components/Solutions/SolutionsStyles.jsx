import styled from "styled-components"

// //TODO: make this a scrollable section?
// export const SolutionsContainer = styled.div`
// // background:blue;
// width: 50%;
// overflow: auto;
// `


export const SolutionsContainer = styled.div`
  width: 50%;
  max-height: 50vh;       /* or fixed height like height: 400px */
  overflow-y: auto;        /* enables vertical scrolling when needed */

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #1d1d1dff;
    border-radius:4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #373737ff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #454545ff;
  }
`;


export const Title = styled.h3`
text-align:center;
margin-top: 0px;
margin-bottom: 20px;
`

export const ScoreSection = styled.div`
`

export const SolutionItem = styled.div`
background:purple;
display: inline-block;
margin-bottom: 2%;
margin-left: 2%;
margin-right: 2%;
padding: 1%;
font-size:90%;
// border: 2px solid black;
border-radius: 3%;
`

export const ScoreTitle = styled.div`
background:green;
margin-bottom: 2%;
text-align:center;
`