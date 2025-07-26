import styled from "styled-components"

export const Wrapper = styled.div`
width:50%;
`

export const SolutionsContainer = styled.div`
  max-height: 55vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #2e2e2eff;
    border-radius:4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #5f5f5fff;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #8a8a8aff;
    cursor:pointer;
  }

`;


export const Title = styled.h3`
text-align:center;
margin-top: 0px;
margin-bottom:0px;
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
box-shadow: inset 0px 5px #ffffff36;
cursor:pointer;
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

export const Message = styled.div`
text-align:center;
font-size:60%;
margin-top:8px;
margin-bottom:5px;
`