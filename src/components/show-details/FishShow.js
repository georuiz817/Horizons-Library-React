import React from "react";

const FishShow = (props) => {
  console.log(props);
  return (
    <div>
      {props.name}
      {props.viewObject.price}
    </div>
  );
};

export default FishShow;
