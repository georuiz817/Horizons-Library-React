import React from "react";

import {
  Container,
  Title,
 
} from "./Home.styles.js";

 

const Home = () => {
  return (
    <Container>
      <Title>Horizons Library</Title>
      <p>You're looking at a old resume probably. It has been updating a lot recently.</p>
      <p>This site has been taken down. For a more polished project with additional features like authentication and all CRUD actions visit</p>
      <a href='https://carrot-admin.netlify.app/#/'>https://carrot-admin.netlify.app/#/</a>

    </Container>
  );
};

export default Home;
