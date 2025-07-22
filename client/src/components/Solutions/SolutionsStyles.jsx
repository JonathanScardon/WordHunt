import styled from "styled-components"

export const Wrapper = styled.div`
width: 45%;
`

export const SolutionsContainer = styled.div`
  max-height: 50vh;
  overflow-y: auto;

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
display: inline-block;
margin-bottom: 2%;
margin-left: 2%;
margin-right: 2%;
padding: 2%;
font-size:90%;
border-radius: 3%;
background: #6abc3a;
box-shadow: inset 0px 5px #ffffff36;
`

export const ScoreTitle = styled.div`
margin-bottom: 2%;
text-align:center;
border-radius:2px;
padding-top: 1%;
padding-bottom: 1%;
`

export const Score = styled.div`
background: #009688;
box-shadow: inset 0px 5px #ffffff36;
padding-top:1.5%;
padding-bottom:1.5%;
border-radius:2px;
`