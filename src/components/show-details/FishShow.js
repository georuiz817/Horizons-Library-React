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
      <hr></hr>
      <h1>Price:</h1>${props.viewObject.price}
      <hr></hr>
      <h1>Cj's price:</h1>${props.viewObject["price-cj"]}
      <hr></hr>
      <h1>Shadow Size:</h1>
      {props.viewObject.shadow}
      <hr></hr>
      <h1>Museum Description:</h1>
      {props.viewObject["museum-phrase"]}
      <hr></hr>
    </div>
  );
};

export default FishShow;
