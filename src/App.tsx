import axios from "axios";
import React, { useEffect } from "react";
import { ContentInteraction, ContentTable } from "./components";
import { useStore } from "./store";

type Props = {};

const App = (props: Props) => {
  const { setCharacters, sort } = useStore();

  const fetchDefaultData = async () => {
    let characterList = [];
    for (let i = 1; i < 43; i++) {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${i}`
      );
      characterList.push(...data.results);
    }
    setCharacters(characterList);
    sort(characterList);
  };

  useEffect(() => {
    fetchDefaultData();
  }, []);

  return (
    <div className="container">
      <h1 style={{ fontSize: "2rem" }}>Characters</h1>
      <ContentInteraction />
      <ContentTable />
    </div>
  );
};

export default App;
