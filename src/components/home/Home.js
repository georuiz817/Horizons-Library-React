import React from "react";

import {
  Container,
  Title,
  ButtonsContainer,
  CategoryLink,
} from "./Home.styles.js";

 

const Home = () => {
  return (
    <Container>
      <Title>Horizons Library</Title>
      <ButtonsContainer>
        <CategoryLink to="/fish">Fish</CategoryLink>
        <CategoryLink to="/villagers">Villagers</CategoryLink>
        <CategoryLink to="/bugs">Bugs</CategoryLink>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
