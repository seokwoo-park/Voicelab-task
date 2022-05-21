import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  episode: string[];
};

const useFetchEpisode = ({ episode }: Props) => {
  const [result, setResult] = useState<{ airEpisode: string; name: string }>({
    airEpisode: "Unknown",
    name: "",
  });

  const fetchEpisode = async () => {
    if (!episode || !episode.length) return;

    const randomEpisode = episode[Math.floor(Math.random() * episode.length)];

    const {
      data: { episode: airEpisode, name },
    } = await axios.get(`${randomEpisode}`);
    setResult({ airEpisode, name });
  };

  useEffect(() => {
    fetchEpisode();
  }, [episode]);

  return { result };
};

export default useFetchEpisode;
