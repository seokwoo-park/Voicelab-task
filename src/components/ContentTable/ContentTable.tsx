import React, { useState } from "react";
import {
  Checkbox,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { tableHeaders } from "../../constants/tableHeaders";
import { useStore } from "../../store";
import { TableFallback } from "../";
import Avatar from "./cellComponents/Avatar";
import Episode from "./cellComponents/Episode";
import Status from "./cellComponents/Status";

const ContentTable = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { sortedList, selectedItems, select } = useStore();

  const changePageHandler = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedItems.some((item) => item === event.target.id)) {
      select(selectedItems.filter((item) => item !== event.target.id));
    } else {
      select([...selectedItems, event.target.id]);
    }
  };

  const selectAllHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const currentPageRows = sortedList.slice(
        (page - 1) * rowsPerPage,
        page * rowsPerPage
      );
      const array: string[] = [];
      currentPageRows.forEach((row) => array.push(`${row.id}`));
      select(array);
    } else {
      select([]);
    }
  };

  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 2px 18px #DDE3EC)",
        backgroundColor: "#ffffff",
        borderRadius: "5px",
        mt: "1.5rem",
      }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox color="primary" onChange={selectAllHandler} />
              </TableCell>
              {tableHeaders.map((header) => (
                <TableCell key={header}>
                  <Box component="h4">{header}</Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedList.length ? (
              sortedList
                .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                .map((character) => (
                  <TableRow
                    key={character.id}
                    sx={{
                      bgcolor:
                        character.status === "Dead" ? "#F6F8FA" : "transparent",
                    }}
                  >
                    <TableCell width={10}>
                      <Checkbox
                        id={`${character.id}`}
                        color="primary"
                        checked={selectedItems.some(
                          (item) => item === `${character.id}`
                        )}
                        onChange={checkboxHandler}
                      />
                    </TableCell>
                    <TableCell width={200}>
                      <Box sx={{ fontWeight: 600 }}>{character.name}</Box>
                      <div>{character.species}</div>
                    </TableCell>

                    <TableCell width={100}>
                      <Avatar character={character} />
                    </TableCell>

                    <TableCell width={200} sx={{ fontWeight: "600" }}>
                      <p>{character.origin.name}</p>
                    </TableCell>

                    <TableCell width={200}>
                      <Episode episode={character.episode} />
                    </TableCell>

                    <TableCell width={50} sx={{ fontWeight: 700 }}>
                      <Status status={character.status} />
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableFallback />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(sortedList.length / 5)}
        page={page}
        onChange={changePageHandler}
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export default ContentTable;
