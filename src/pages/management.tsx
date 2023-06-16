import { Box, Grid, Paper, styled } from "@mui/material";
import { useEffect, useState } from "react";
import BasicTabs from "../component/tabs";
import Teacher from "../component/teacher";
import { ITeacher } from "../models/api/teacher";
import { IProject } from "../models/api/project";
import Project from "../component/project";
import { getTeachers } from "../api/teacher.api";
import { useSelector } from "react-redux";
import { CounterState } from "../hook/slice";
import { getProjects } from "../api/project.api";
import { getAssignments } from "../api/assignment.api";
import { IAssignment } from "../models/api/assignments";
type Props = {};

const Management = (props: Props) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: 0,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100vh",
  }));
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [assignments, setAssignments] = useState<IAssignment[]>([]);
  const load: boolean = useSelector((state: CounterState) => state.load);
  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await getTeachers();
      setTeachers(response);
    };
    const fetchProjects = async () => {
      const response = await getProjects();
      setProjects(response);
    };
    const fetchAsignments = async () => {
      const response = await getAssignments();
      setAssignments(response);
    };
    fetchTeachers();
    fetchProjects();
    fetchAsignments();
  }, [load]);

  return (
    <Box sx={{ width: "100%", height: "100%", margin: 0 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} sx={{ padding: 0 }}>
          <Grid item xs={12}>
            <Item sx={{ height: "30vh" }}>
              <Project />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item sx={{ height: "70vh" }}>
              <Teacher />
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <BasicTabs
            teachers={teachers}
            projects={projects}
            assignments={assignments}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Management;
