import { TextField } from "@mui/material";
import React, { useState } from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFilter = ({ search, setSearch }: Props) => {
  const searchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      placeholder="Search"
      onChange={searchChange}
      value={search}
      sx={{ backgroundColor: "#ffffff", width: "100%" }}
    />
  );
};

export default SearchFilter;
