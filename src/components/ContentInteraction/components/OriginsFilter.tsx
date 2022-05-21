import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import useOriginsList from "../../../hooks/useOriginsList";

type Props = {
  origins: string[];
  setOrigins: React.Dispatch<React.SetStateAction<string[]>>;
};

const OriginsFilter = ({ origins, setOrigins }: Props) => {
  const { originList } = useOriginsList();

  const originChange = (event: SelectChangeEvent<string[]>) => {
    setOrigins(event.target.value as string[]);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="origin-label">Origin</InputLabel>
      <Select
        labelId="origin-label"
        value={origins}
        multiple
        onChange={originChange}
        sx={{ backgroundColor: "#ffffff" }}
      >
        {originList.map((origin) => (
          <MenuItem value={origin} key={origin}>
            {origin}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default OriginsFilter;
