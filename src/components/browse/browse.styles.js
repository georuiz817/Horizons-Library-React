import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryCard = styled.div`
  font-size: 2rem;
  border: solid black thin;
  width: 30%;
  margin-bottom: 1%;
  text-align: center;
  text-deocration: none;
  color: black;
  border-radius: 15px;
  &:hover {
    background-color: #2b9eb3;;

`;

export const BrowserLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 50%;
`;

export const BrowseFilter = styled.input`
  border: solid black thin;
  margin-bottom: 2%;
  border-radius: 15px;
  background-color: #44af69;
  font-size: 2rem;
  width: 30%;
  color: black;
  padding-left: 1%;
  outline: none;
`;
