import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store";
import { hasAllFiltered } from "../../utils/filter-utils";
import {
  SearchFilter,
  SpeciesFilter,
  OriginsFilter,
  StatusFilter,
} from "./components";

type Props = {};

const Filterbar = (props: Props) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [origins, setOrigins] = useState<string[]>([]);
  const [species, setSpecies] = useState<string[]>([]);

  const { characters, sort } = useStore();

  useEffect(() => {
    const result = hasAllFiltered(search, species, origins, status, characters);
    if (result) {
      sort(result);
    }
  }, [search, status, species, origins]);

  return (
    <Grid item container sx={{ gap: "1rem" }}>
      <Grid item xs={2.5}>
        <SearchFilter search={search} setSearch={setSearch} />
      </Grid>
      <Grid item xs={2.5}>
        <SpeciesFilter species={species} setSpecies={setSpecies} />
      </Grid>
      <Grid item xs={2.5}>
        <OriginsFilter origins={origins} setOrigins={setOrigins} />
      </Grid>
      <Grid item xs={2.5}>
        <StatusFilter status={status} setStatus={setStatus} />
      </Grid>
    </Grid>
  );
};

export default Filterbar;
