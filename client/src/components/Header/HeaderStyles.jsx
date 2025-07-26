import { Link } from 'react-router-dom';
import styled from "styled-components"


export const HeaderContainer = styled.div`
margin-left:20%;
margin-right:20%;
margin-top: 1.5%;
z-index:2;
position:relative;
display:flex;
justify-content: center;
gap:50px;
font-size: 85%;
`

export const HeaderLink = styled(Link)`
text-decoration: none;
color: white;
cursor: pointer;

&:hover {
color: grey;
}
`;

export const HelpButton = styled.button`
background:transparent;
border: None;
color:white;
font-family: inherit;
cursor:pointer;

&:hover{
color:grey
}
`