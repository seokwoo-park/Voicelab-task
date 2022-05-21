import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { speciesList } from "../constants/speciesList";

type Props = {
  species: string[];
  setSpecies: React.Dispatch<React.SetStateAction<string[]>>;
};

const SpeciesFilter = ({ species, setSpecies }: Props) => {
  const speciesChange = (event: SelectChangeEvent<string[]>) => {
    setSpecies(event.target.value as string[]);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="species-label">Species</InputLabel>
      <Select
        labelId="species-label"
        value={species}
        multiple
        onChange={speciesChange}
        sx={{ backgroundColor: "#ffffff" }}
      >
        {speciesList.map((specie) => (
          <MenuItem value={specie} key={specie}>
            {specie}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SpeciesFilter;
