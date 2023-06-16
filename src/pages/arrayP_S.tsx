import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";
import { IProject } from "../models/api/project";

interface Props {}

interface Column {
  id: "name";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "name", label: "IT1", minWidth: 70 },
  { id: "name", label: "IT2", minWidth: 70 },
  { id: "name", label: "IT3", minWidth: 70 },
  { id: "name", label: "IT4", minWidth: 70 },
  { id: "name", label: "IT5", minWidth: 70 },
  { id: "name", label: "IT6", minWidth: 70 },
  { id: "name", label: "IT7", minWidth: 70 },
  { id: "name", label: "IT8", minWidth: 70 },
  { id: "name", label: "IT9", minWidth: 70 },
  { id: "name", label: "IT10", minWidth: 70 },
  { id: "name", label: "IT11", minWidth: 70 },
  { id: "name", label: "IT12", minWidth: 70 },
  { id: "name", label: "IT14", minWidth: 70 },
  { id: "name", label: "IT15", minWidth: 70 },
  { id: "name", label: "IT15", minWidth: 70 },
];

interface Data {
  name: string;
  code: string;
}

function ArrayP_S(props: { projects: IProject[] }) {
  const { projects } = props;
  const array: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  ];

  return (
    <Box id="table_project" sx={{ width: "100%", maxHeight: "100vh" }}>
      <TableContainer sx={{ backgroundColor: "fff" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                key={Math.random()}
                align={"right"}
                style={{
                  // top: 57,
                  minWidth: 70,
                }}
              ></TableCell>

              {columns.map((column) => (
                <TableCell
                  key={Math.random()}
                  align={"center"}
                  style={{
                    // top: 57,
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {array.map((a, idx) => {
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={Math.random()}
                >
                  <TableCell
                    key={Math.random()}
                    align={"right"}
                    style={{
                      // top: 57,
                      minWidth: 70,
                      padding: 0,
                    }}
                  >
                    {projects[idx].id}
                  </TableCell>
                  {columns.map((column, index) => {
                    return (
                      <TableCell
                        key={Math.random()}
                        align={"center"}
                        style={{ padding: 0 }}
                      >
                        {a[index]}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

ArrayP_S.propTypes = {};

export default ArrayP_S;
