import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Management from "./management";
import ArrayP_S from "./arrayP_S";
import { ITeacher } from "../models/api/teacher";
import { useSelector } from "react-redux";
import {
  getArrayP_S,
  getArrayT_P,
  getArrayT_S,
  getAssignments,
} from "../api/assignment.api";
import { getProjects } from "../api/project.api";
import { getTeachers } from "../api/teacher.api";
import { CounterState } from "../hook/slice";
import { IArray_Assignment, IAssignment } from "../models/api/assignments";
import { IProject } from "../models/api/project";
import ArrayT_S from "./arrayT_S";
import ArrayT_P from "./arrayT_P";
import ArrayAss from "./arrayAss";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const SPECIALIZE: string[] = [
  "IT1",
  "IT2",
  "CH1",
  "CH2",
  "BF1",
  "BF2",
  "EE1",
  "EE2",
];
export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [teachers, setTeachers] = React.useState<ITeacher[]>([]);
  const [projects, setProjects] = React.useState<IProject[]>([]);
  const [arrayP_S, setArrayP_S] = React.useState<number[][]>([]);
  const [arrayT_S, setArrayT_S] = React.useState<number[][]>([]);
  const [arrayT_P, setArrayT_P] = React.useState<number[][]>([]);
  const [assignments, setAssignments] = React.useState<IArray_Assignment>({
    array: [],
    assignment: [],
  });
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
    const fetchArrayP_S = async () => {
      const response = await getArrayP_S();
      setArrayP_S(response);
    };
    const fetchArrayT_S = async () => {
      const response = await getArrayT_S();
      setArrayT_S(response);
    };
    const fetchArrayT_P = async () => {
      const response = await getArrayT_P();
      setArrayT_P(response);
    };
    fetchTeachers();
    fetchProjects();
    fetchAsignments();
    fetchArrayP_S();
    fetchArrayT_S();
    fetchArrayT_P();
  }, [load]);
  console.log("arrayP_S", arrayP_S[0]);
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
          <Tab label="arrayAss" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Management />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArrayP_S
          projects={projects}
          arrayP_S={arrayP_S}
          SPECIALIZE={SPECIALIZE}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ArrayT_S
          teachers={teachers}
          arrayT_S={arrayT_S}
          SPECIALIZE={SPECIALIZE}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ArrayT_P projects={projects} teachers={teachers} arrayT_P={arrayT_P} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ArrayAss teachers={teachers} arrayAss={assignments.array} />
      </TabPanel>
    </Box>
  );
}
