import { Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CharacterType } from "../../../constants/types";

type Props = {
  character: CharacterType;
};

const Avatar = ({ character }: Props) => {
  return (
    <Tooltip
      title={
        <>
          <p>Location</p>
          <Box sx={{ borderTop: "1px solid white" }}>
            <h3>{character.location.name}</h3>
          </Box>
        </>
      }
      followCursor
    >
      <Box
        component="img"
        sx={{
          width: "5rem",
          objectFit: "contain",
          border: "2px dashed #E5EAF0",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          borderRadius: "15px",
          cursor: "pointer",
        }}
        src={character.image}
      />
    </Tooltip>
  );
};

export default Avatar;
