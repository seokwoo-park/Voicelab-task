import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

const StatusFilter = ({ status, setStatus }: Props) => {
  const statusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="status-label">Status</InputLabel>
      <Select
        labelId="status-label"
        value={status}
        onChange={statusChange}
        sx={{ backgroundColor: "#ffffff" }}
      >
        <MenuItem value="Alive">Alive</MenuItem>
        <MenuItem value="Dead">Dead</MenuItem>
        <MenuItem value="Unknown">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default StatusFilter;
