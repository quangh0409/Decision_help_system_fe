import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { IProject } from "../../models/api/project";
import { createProject } from "../../api/project.api";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { CounterState, setLoading, setValue } from "../../hook/slice";

const Project = () => {
  const [specializes, setSpecializes] = useState<string[]>([""]);
  const [project, setProject] = useState<IProject>({
    id: "",
    name: "",
    specialize: [],
    teacher_name: "",
    teacher_email: "",
  });
  const load: boolean = useSelector((state: CounterState) => state.load);
  const [change, setChange] = useState<Boolean>(false);
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const newProject: IProject = { ...project };

  const handleCreate = async (project: IProject) => {
    const res = await createProject(project);
  };
  let array: string[] = specializes;

  useEffect(() => {
    setChange(false);
  }, [change]);

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
        id="project_1"
      >
        <Grid item xs={12}>
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
            Đồ án
          </Typography>
        </Grid>

        <Grid id="project_2" item xs={12} sx={{ backgroundColor: "white" }}>
          <Grid
            id="10"
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid id="p3" item xs={6}>
              <Grid id="p6" item xs={12}>
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
                    Tên đồ án:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Tên đồ án"
                    variant="outlined"
                    size="small"
                    defaultValue={project?.name}
                    onChange={(e) => {
                      newProject.name = e.target.value;
                    }}
                  />
                </Item>
              </Grid>
              <Grid id="p7" item xs={12}>
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
                    Giáo viên hướng dẫn:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Tên giáo viên"
                    variant="outlined"
                    size="small"
                    defaultValue={project?.teacher_name}
                    onChange={(e) => {
                      newProject.teacher_name = e.target.value;
                    }}
                  />
                </Item>
              </Grid>
              <Grid id="p8" item xs={12}>
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
                    Email giáo viên:
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="email"
                    variant="outlined"
                    size="small"
                    defaultValue={project?.teacher_email}
                    onChange={(e) => {
                      newProject.teacher_email = e.target.value;
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
                      const temp: IProject = {
                        ...newProject,
                        specialize: array,
                      };
                      handleCreate(temp);
                      setSpecializes([""]);
                      dispatch(setLoading(!load));
                      dispatch(setValue(0));
                    }}
                  >
                    Lưu
                  </Button>
                </Item>
              </Grid>
            </Grid>
            <Grid id="p4" item xs={6}>
              {array.map((a, i) => {
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
                      label="Tên chuyên môn"
                      variant="outlined"
                      size="small"
                      defaultValue={a}
                      onChange={(e) => {
                        array[i] = e.target.value;
                      }}
                    />
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setProject(newProject);
                        setChange(true);
                        array.push("");
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

Project.propTypes = {};

export default Project;
