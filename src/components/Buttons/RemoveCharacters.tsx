import { Box, Button } from "@mui/material";
import React from "react";
import { useStore } from "../../store";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

type Props = {};

const RemoveCharacters = (props: Props) => {
  const { sort, sortedList, selectedItems, select } = useStore();

  const removeHandler = () => {
    const result = sortedList.filter(
      (character) =>
        !selectedItems.some((item) => character.id === Number(item))
    );

    sort(result);
    select([]);
  };

  return (
    <Button variant="contained" color="error" onClick={removeHandler}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <DeleteForeverIcon />
        Remove characters
      </Box>
    </Button>
  );
};

export default RemoveCharacters;
