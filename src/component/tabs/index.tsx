import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ListProject from "../list/project";
import CollapsibleTableTeacher from "../list/teacher";
import { ITeacher } from "../../models/api/teacher";
import { CounterState, setValue } from "../../hook/slice";
import { useDispatch, useSelector } from "react-redux";
import { IProject } from "../../models/api/project";
import CollapsibleTableAssignment from "../list/assignment";
import { IAssignment } from "../../models/api/assignments";

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
        <Box key={`key${index}${value}`} sx={{ p: 3 }}>
          {children}
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

export default function BasicTabs(props: {
  teachers: ITeacher[];
  projects: IProject[];
  assignments: IAssignment[];
}) {
  const { teachers, projects, assignments } = props;
  const value: number = useSelector((state: CounterState) => state.value);

  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setValue(newValue));
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Đồ án" {...a11yProps(0)} />
          <Tab label="Giáo viên" {...a11yProps(1)} />
          <Tab label="Phân công" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel key={"tab1"} value={value} index={0}>
        <ListProject projects={projects} />
      </TabPanel>
      <TabPanel key={"tab2"} value={value} index={1}>
        <CollapsibleTableTeacher teachers={teachers} />
      </TabPanel>
      <TabPanel key={"tab3"} value={value} index={2}>
        <CollapsibleTableAssignment assignments={assignments}  />
      </TabPanel>
    </Box>
  );
}
