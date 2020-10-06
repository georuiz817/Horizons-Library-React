import React from "react";

const VillagerShow = (props) => {
  console.log(props);
  return (
    <div>
      {props.name}
      {props.viewObject.personality}
    </div>
  );
};

export default VillagerShow;
