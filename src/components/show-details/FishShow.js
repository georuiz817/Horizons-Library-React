import React from "react";
import { Title } from "../home/Home.styles";
const FishShow = (props) => {
  console.log(props);
  return (
    <div>
      <Title>{props.name}</Title>
      <h6>{props.viewObject["catch-phrase"]}</h6>
      <h1>Location:</h1>
      {props.viewObject.availability.location}
      <h1>Price:</h1>${props.viewObject.price}
      <h1>Cj's price:</h1>${props.viewObject["price-cj"]}
      <h1>Shadow Size:</h1>
      {props.viewObject.shadow}
      <h1>Museum Description:</h1>
      {props.viewObject["museum-phrase"]}
    </div>
  );
};

export default FishShow;
