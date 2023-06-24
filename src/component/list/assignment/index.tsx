import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TablePagination } from "@mui/material";
import { ITeacher } from "../../../models/api/teacher";
import { IAssignment } from "../../../models/api/assignments";

function Row(props: { row: IAssignment , p_idx: number}) {
  const { row, p_idx } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        hover
        role="checkbox"
        tabIndex={-1}
        key={Math.random()}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.teacher_name}
        </TableCell>
        <TableCell align="right">{row.teacher_phone}</TableCell>
        <TableCell align="right">{row.teacher_email}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Đồ án được phân công
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Tên đồ án</TableCell>
                    <TableCell>Tên chuyên môn</TableCell>
                    <TableCell>Độ phù hợp</TableCell>
                    <TableCell>Giáo viên hướng dẫn</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.project.map((p) => (
                    <TableRow key={Math.random()}>
                      <TableCell component="th" scope="row">
                        {p.name}
                      </TableCell>
                      <TableCell>{p.specialize}</TableCell>
                      <TableCell>{p.coincidence}</TableCell>
                      <TableCell>{p.teacher_name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTableAssignment(props: {
  assignments: IAssignment[];
}) {
  const { assignments } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box>
      <TableContainer component={Paper} sx={{ height: "100%" }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Họ và tên</TableCell>
              <TableCell align="right">Số điện thoại</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((assignment, i) => (
                <Row key={Math.random()} row={assignment} p_idx={i}/>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={assignments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />{" "}
    </Box>
  );
}
