import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ISpecialize, ITeacher } from "../../models/api/teacher";
import AddIcon from "@mui/icons-material/Add";
import { createTeacher, getTeachers } from "../../api/teacher.api";
import { useDispatch } from "react-redux";
import { setLoading, setValue } from "../../hook/slice";
interface Props {
  // handleTeacher: (load: Boolean, _value: number) => void;
  // handleLoad: (load: Boolean) => void;
}

const Teacher = (props: Props) => {
  const [teacher, setTeacher] = useState<ITeacher>({
    id: "",
    name: "",
    phone: "",
    email: "",
    specialize: [],
  });
  const [specializes, setSpecializes] = useState<ISpecialize[]>([
    {
      name: "",
      coincidence: 0,
    },
  ]);
  const [change, setChange] = useState<Boolean>(false);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const newTeacher: ITeacher = { ...teacher };
  const dispatch = useDispatch();
  let array: ISpecialize[] = specializes;

  useEffect(() => {
    setChange(false);
  }, [change]);

  const handleCreate = async (teacher: ITeacher) => {
    await createTeacher(teacher);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ margin: "0px", width: "auto" }}
        id="t1"
      >
        <Grid id="t2" item xs={12}>
          <Typography
            variant="body1"
            component="h2"
            sx={{
              height: "50px",
              fontStyle: { color: "black" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Giáo viên
          </Typography>
        </Grid>
        <Grid id="t3" item xs={12} sx={{ backgroundColor: "white" }}>
          <Grid
            id="10"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid id="5" item xs={5}>
              <Grid id="6" item xs={12}>
                <Item
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="h2"
                    sx={{ marginTop: "4px", fontStyle: { color: "black" } }}
                  >
                    Tên giáo viên:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Tên đồ án"
                    variant="outlined"
                    size="small"
                    defaultValue={teacher?.name}
                    onChange={(e) => {
                      newTeacher.name = e.target.value;
                    }}
                  />
                </Item>
              </Grid>
              <Grid id="7" item xs={12}>
                <Item
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="h2"
                    sx={{ marginTop: "4px", fontStyle: { color: "black" } }}
                  >
                    Email:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Tên đồ án"
                    variant="outlined"
                    size="small"
                    defaultValue={teacher?.email}
                    onChange={(e) => {
                      newTeacher.email = e.target.value;
                    }}
                  />
                </Item>
              </Grid>
              <Grid id="8" item xs={12}>
                <Item
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="h2"
                    sx={{ marginTop: "4px", fontStyle: { color: "black" } }}
                  >
                    Số điện thoại:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Tên đồ án"
                    variant="outlined"
                    size="small"
                    defaultValue={teacher?.phone}
                    onChange={(e) => {
                      newTeacher.phone = e.target.value;
                    }}
                  />
                </Item>
              </Grid>
              <Grid id="12" item xs={12}>
                <Item
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => {
                      const temp: ITeacher = {
                        ...newTeacher,
                        specialize: array,
                      };
                      handleCreate(temp);
                      setSpecializes([
                        {
                          name: "",
                          coincidence: 0,
                        },
                      ]);
                      dispatch(setLoading(true));
                      dispatch(setValue(1));
                    }}
                  >
                    Lưu
                  </Button>
                </Item>
              </Grid>
            </Grid>
            <Grid id="9" item xs={7}>
              {specializes.map((a, i) => {
                return (
                  <Item
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="h2"
                      sx={{ marginTop: "4px", fontStyle: { color: "black" } }}
                    >
                      Chuyên môn:
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Tên đồ án"
                      variant="outlined"
                      size="small"
                      defaultValue={a.name}
                      onChange={(e) => {
                        a.name = e.target.value;
                      }}
                    />
                    <Typography
                      variant="body1"
                      component="h2"
                      sx={{ marginTop: "4px", fontStyle: { color: "black" } }}
                    >
                      độ phù hợp :
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      label="Tên đồ án"
                      variant="outlined"
                      size="small"
                      defaultValue={a.coincidence}
                      onChange={(e) => {
                        a.coincidence = Number.parseInt(e.target.value);
                      }}
                    />
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setTeacher(newTeacher);
                        setChange(true);
                        array.push({
                          name: "",
                          coincidence: 0,
                        });
                        setSpecializes(array);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </Item>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Teacher.propTypes = {};

export default Teacher;
