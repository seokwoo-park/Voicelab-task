import { Box } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import HelpIcon from "@mui/icons-material/Help";

type Props = {
  status: string;
};

const Status = ({ status }: Props) => {
  return (
    <Box sx={{ display: "flex", gap: "0.5rem" }}>
      {status === "Alive" ? (
        <CheckCircleOutlineIcon color="success" />
      ) : status === "Dead" ? (
        <ReportGmailerrorredIcon color="error" />
      ) : (
        <HelpIcon color="disabled" />
      )}
      {status}
    </Box>
  );
};

export default Status;
