import React, { useState, useEffect } from "react";
import FishShow from "./FishShow";
import VillagerShow from "./VillagerShow";
import BugsShow from "./BugsShow";
import { Container, Title } from "../home/Home.styles";
 
const ShowDetails = (props) => {
  const [viewObject, setViewObject] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(false);
  const { id } = props.match.params;
  const { category } = props.match.params;

  useEffect(() => {
    fetchViewObject();
    // eslint-disable-next-line
  }, []);

  async function fetchViewObject() {
    setLoading(true);
    try {
      let data = await (
        await fetch(`https://acnhapi.com/v1/${category}/${id}`)
      ).json();
      setViewObject(data);
      setName(data.name["name-USen"]);
      setLoading(false);
    } catch (err) {
      alert("Unable to process request");
    } finally {
      console.log(`All Tasks is Done`);
      setLoading(false);
    }
  }

  const showContainer = () => {
    if (category === "fish" && viewObject !== "") {
      return <FishShow viewObject={viewObject} loading={loading} name={name} />;
    } else if (category === "villagers" && viewObject !== "") {
      return <VillagerShow viewObject={viewObject} name={name} />;
    } else if (category === "bugs" && viewObject !== ""){
      return <BugsShow viewObject={viewObject} name={name} />;
    } else return null
  };
  
  return loading ? (
    <Container>
      <Title>loading..</Title>
    </Container>
  ) : (
    <Container>
      {showContainer()}
    </Container>
  );
};

export default ShowDetails;
