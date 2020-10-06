import React, { useState, useEffect } from "react";
import FishShow from "./FishShow";
import VillagerShow from './VillagerShow'
import BugsShow from './BugsShow'
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
  console.log(viewObject);

  return loading ? (
    <Container>
      <Title>loading..</Title>
    </Container>
  ) : (
    <Container>
      {category === "fish" ? (
        <FishShow viewObject={viewObject} name={name} />
      ) : null}
      {category === "villagers" ? (
        <VillagerShow viewObject={viewObject} name={name} />
      ) : null}
      {category === "bugs" ? (
        <BugsShow viewObject={viewObject} name={name} />
      ) : null}
    </Container>
  );
};

export default ShowDetails;
