import React, { useState, useEffect } from "react";
import { CategoryCard, BrowserLink } from "./browse.styles";
import { Container, Title } from "../home/Home.styles";

const Browse = (props) => {
  const [dataIndex, setDataIndex] = useState("");
  const [loading, setLoading] = useState(false);
  const { category } = props.match.params;
  let categoryArray = [...dataIndex];

  useEffect(() => {
    fetchCategoryData();
  }, []);

  async function fetchCategoryData() {
    setLoading(true);
    try {
      let data = await (
        await fetch(`https://acnhapi.com/v1a/${category}`)
      ).json();
      setDataIndex(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      alert("Unable to process request");
    } finally {
      console.log(`All Tasks is Done`);
      setLoading(false);
    }
  }

  return loading ? (
    <Container>
      <Title>loading...</Title>
    </Container>
  ) : (
    <Container>
      <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      {categoryArray.map((i) => (
        <BrowserLink to=':name'>
          <CategoryCard>
            <p key={i.id}>{i.name["name-USen"]}</p>
          </CategoryCard>
        </BrowserLink>
      ))}
    </Container>
  );
};

export default Browse;
