import { Box, CircularProgress } from "@mui/material";
import React from "react";

type Props = {};

const Spinner = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={150} />
      <h1 style={{ fontSize: "3rem" }}>Loading...</h1>
    </Box>
  );
};

export default Spinner;
