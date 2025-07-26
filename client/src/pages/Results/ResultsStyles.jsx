import styled from "styled-components"


export const DataContainer = styled.div`
display:flex;
flex-direction: column;
margin-bottom: 0%;
align-items:flex-start;
`

export const Data = styled.span`
margin-top: 3%;
margin-bottom: 3%;
font-size: 120%;
`

export const HeaderWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom: 1.5%;
`
export const Title = styled.div`
position: relative;
margin-bottom: 1.5%;
display: inline-block;
font-size: 250%;

&::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: #bebebeff;
  border-radius: 4px;
}
`;
