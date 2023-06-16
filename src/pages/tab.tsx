import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Management from "./management";
import ArrayP_S from "./arrayP_S";
import { ITeacher } from "../models/api/teacher";
import { useSelector } from "react-redux";
import { getAssignments } from "../api/assignment.api";
import { getProjects } from "../api/project.api";
import { getTeachers } from "../api/teacher.api";
import { CounterState } from "../hook/slice";
import { IAssignment } from "../models/api/assignments";
import { IProject } from "../models/api/project";
import ArrayT_S from "./arrayT_S";
import ArrayT_P from "./arrayT_P";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [teachers, setTeachers] = React.useState<ITeacher[]>([]);
  const [projects, setProjects] = React.useState<IProject[]>([]);
  const [assignments, setAssignments] = React.useState<IAssignment[]>([]);
  const load: boolean = useSelector((state: CounterState) => state.load);
  React.useEffect(() => {
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
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="arrayP_S" {...a11yProps(1)} />
          <Tab label="arrayT_S" {...a11yProps(2)} />
          <Tab label="arrayT_P" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Management />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArrayP_S projects={projects} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArrayT_S teachers={teachers} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ArrayT_P projects={projects} teachers={teachers} />
      </TabPanel>
    </Box>
  );
}
