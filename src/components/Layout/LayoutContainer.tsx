import { Box, Container } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const LayoutContainer = ({ children }: Props) => {
  return <Container sx={{ mt: "50px" }}>{children}</Container>;
};

export default LayoutContainer;
