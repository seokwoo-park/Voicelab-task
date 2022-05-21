import { TableCell, TableRow } from "@mui/material";
import React from "react";

const TableFallback = () => {
  const EMPTY_ARRAY = [...Array(6)];
  return (
    <TableRow>
      {EMPTY_ARRAY.map(() => (
        <TableCell sx={{ color: "red" }}>
          <p>No search results</p>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableFallback;
