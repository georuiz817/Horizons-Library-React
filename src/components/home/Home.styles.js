import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 10%;
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const ButtonsContainer = styled.div`
  text-align: center;
`;

export const CategoryLink = styled(Link)`
  display: block;
  margin-bottom: 2%;
  border: solid black thin;
  width: 10%;
  padding: 1%;
  text-decoration: none;
  border-radius: 15px;
`;
