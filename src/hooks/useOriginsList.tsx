import React, { useEffect, useState } from "react";
import { useStore } from "../store";

const useOriginsList = () => {
  const [originList, setOriginList] = useState<string[]>([]);
  const { characters } = useStore();

  const generateList = () => {
    if (!characters || !characters.length) setOriginList([]);
    const list: string[] = [];
    characters.forEach(
      (item) => !list.includes(item.origin.name) && list.push(item.origin.name)
    );

    setOriginList(list);
  };

  useEffect(() => {
    characters && generateList();
  }, [characters]);
  return { originList };
};

export default useOriginsList;
