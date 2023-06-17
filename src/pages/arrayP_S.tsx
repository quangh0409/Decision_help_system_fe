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
function ArrayP_S(props: {
  projects: IProject[];
  arrayP_S: number[][];
  SPECIALIZE: string[];
}) {
  const { projects, arrayP_S, SPECIALIZE } = props;
  console.log(arrayP_S);

  return (
    <>
      <Box
        component={"div"}
        id="table_project"
        sx={{ width: "100%", maxHeight: "100vh" }}
      >
        <TableContainer component={"div"} sx={{ backgroundColor: "fff" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  key={Math.random()}
                  align={"right"}
                  style={{
                    minWidth: 70,
                  }}
                ></TableCell>

                {SPECIALIZE.map((s) => (
                  <TableCell
                    key={Math.random()}
                    align={"center"}
                    style={{
                      minWidth: 70,
                    }}
                  >
                    {s}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {arrayP_S.map((a, idx) => {
                return (
                  <TableRow
                    sx={{
                      backgroundColor: idx % 2 === 0 ? "#808080" : "#FFFFFF",
                      "&:hover": {
                        backgroundColor: "#FF0000", // Màu nền khi hover
                      },
                    }}
                    // role="checkbox"
                    // tabIndex={-1}
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
                      {"p" + idx}
                    </TableCell>
                    {SPECIALIZE.map((column, index) => {
                      return (
                        <TableCell
                          key={Math.random()}
                          align={"center"}
                          style={{
                            padding: 0,
                          }}
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
    </>
  );
}

ArrayP_S.propTypes = {};

export default ArrayP_S;
