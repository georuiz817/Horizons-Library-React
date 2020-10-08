import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
margin: 2%
`

export const NavLink = styled(Link)`
  display: inline;
  font-size: 2rem; 
  margin-right: 2%;
  text-decoration: none;
  color: black;


  &:hover {
    color: black;

`;