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


const Project = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const project: IProject = {
    id: "",
    name: "",
    specialize: "",
  };

  const handleCreate = async (project: IProject) => {
    const res = await createProject(project);
    console.log(res);
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
        <Grid id="project_2" item xs={12}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "100%" }}
          >
            <Grid item xs={6}>
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
                  onChange={(e) => {
                    project.name = e.target.value;
                  }}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
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
                  Chuyên môn đồ án:
                </Typography>
                <TextField
                  id="outlined-basic"
                  label="Tên đồ án"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    project.specialize = e.target.value;
                  }}
                />
              </Item>
            </Grid>

            <Grid item xs={6}>
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
                    handleCreate(project);
                  }}
                >
                  Lưu
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Project.propTypes = {};

export default Project;
