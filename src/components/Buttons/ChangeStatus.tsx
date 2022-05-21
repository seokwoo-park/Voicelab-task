import { Button } from "@mui/material";
import { useStore } from "../../store";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/system";

type Props = {};

const ChangeStatus = (props: Props) => {
  const { selectedItems, sortedList, sort, characters, select } = useStore();

  const handleChangeStatus = () => {
    if (!selectedItems.length) return;

    const selectedIndex = Number(selectedItems[0]) - 1;
    let status = characters[selectedIndex].status;

    switch (status) {
      case "Dead":
        break;

      case "Alive":
        status = "Dead";
        break;

      default:
        status = "Alive";
        break;
    }
    const result = [...sortedList];
    result.forEach((item) => {
      if (item.id === selectedIndex + 1) {
        item.status = status;
      }
    });

    sort(result);
    select([]);
  };

  return (
    <Button onClick={handleChangeStatus} variant="contained" color="info">
      <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <EditIcon />
        Change Status
      </Box>
    </Button>
  );
};

export default ChangeStatus;
