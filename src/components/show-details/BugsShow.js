import React from "react";

const BugsShow = (props) => {
  console.log(props);
  return (
    <div>
      {props.name}
      {props.viewObject.price}
    </div>
  );
};

export default BugsShow;
