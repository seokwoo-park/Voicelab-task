import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { CharacterType } from "../../../constants/types";
import useFetchEpisode from "../../../hooks/useFetchEpisode";

type Props = {
  episode: string[];
};

const Episode = ({ episode }: Props) => {
  const { result } = useFetchEpisode({ episode });

  return (
    <Box>
      <p style={{ fontWeight: "600" }}>{result.airEpisode}</p>
      <p>{result.name}</p>
    </Box>
  );
};

export default Episode;
