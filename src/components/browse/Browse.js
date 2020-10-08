import React, { useState, useEffect } from "react";
import { CategoryCard, BrowserLink, BrowseFilter } from "./browse.styles";
import { Container, Title } from "../home/Home.styles";

const Browse = (props) => {
  const [dataIndex, setDataIndex] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const { category } = props.match.params;
  let categoryArray = [...dataIndex];

  useEffect(() => {
    fetchCategoryData();
    // eslint-disable-next-line
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

  let filteredCategory = categoryArray.filter((i) => {
    return i.name["name-USen"].indexOf(search) !== -1;
  });

  return loading ? (
    <Container>
      <Title>loading...</Title>
    </Container>
  ) : (
    <Container>
      <Title>{category.charAt(0).toUpperCase() + category.slice(1)}</Title>
      <BrowseFilter
        placeholder='Search'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCategory
        .sort((a, b) => (a.name["name-USen"].toUpperCase() > b.name["name-USen"].toUpperCase() ? 1 : -1))
        .map((i) => (
          <CategoryCard>
            <BrowserLink to={`/${category}/${i.id}`}>
              <p>{i.name["name-USen"].charAt(0).toUpperCase() + i.name["name-USen"].slice(1)}</p>
            </BrowserLink>
          </CategoryCard>
        ))}
    </Container>
  );
};

export default Browse;
