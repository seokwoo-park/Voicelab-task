import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStore } from "../../store";
import ChangeStatus from "../Buttons/ChangeStatus";
import RemoveCharacters from "../Buttons/RemoveCharacters";
import Filterbar from "./Filterbar";

type Props = {};

const index = (props: Props) => {
  const { selectedItems } = useStore();

  return (
    <Grid item container>
      <Grid item xs={8}>
        <Filterbar />
      </Grid>
      {selectedItems.length < 2 && (
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              justifyContent: "end",
              height: "100%",
            }}
          >
            <ChangeStatus />
            <RemoveCharacters />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};

export default index;
