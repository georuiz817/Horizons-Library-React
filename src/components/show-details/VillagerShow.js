import React from "react";
import { Title } from "../home/Home.styles";
const VillagerShow = (props) => {
  console.log(props);
  return (
    <div>
      <Title>{props.name}</Title>
      <h6>{props.viewObject["catch-phrase"]}</h6>
      <h1>Personality:</h1>
      {props.viewObject.personality}
      <hr></hr>
      <h1>Birthday:</h1>
      {props.viewObject["birthday-string"]}
      <hr></hr>
      <h1>Gender:</h1>
      {props.viewObject.gender}
      <hr></hr>
      <h1>Species:</h1>
      {props.viewObject.species}
      <hr></hr>
    </div>
  );
};

export default VillagerShow;
