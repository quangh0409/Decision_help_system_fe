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
import { ITeacher } from "../models/api/teacher";

interface Props {}

interface Column {
  id: "name";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Data {
  name: string;
  code: string;
}

function ArrayT_S(props: {
  teachers: ITeacher[];
  arrayT_S: number[][];
  SPECIALIZE: string[];
}) {
  const { teachers, arrayT_S, SPECIALIZE } = props;

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
              >Giáo viên</TableCell>

              {SPECIALIZE.map((s) => (
                <TableCell
                  key={Math.random()}
                  align={"center"}
                  style={{
                    // top: 57,
                    minWidth: 70,
                  }}
                >
                  {s}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {arrayT_S.map((a, idx) => {
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
                    {teachers[idx].email}
                  </TableCell>
                  {SPECIALIZE.map((column, index) => {
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

ArrayT_S.propTypes = {};

export default ArrayT_S;
