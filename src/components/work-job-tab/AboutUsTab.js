import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Work from "./Work";
import Education from "./Education";
import "./AboutUsTab.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
    className: "coloured",
  };
}

const AboutUsTab = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  return (
    <>
      <Box>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="none"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="Education"
              {...a11yProps(0)}
              iconPosition="start"
              className="tab-label"
              icon={<SchoolRoundedIcon className="tab-icon" />}
            />
            <Tab
              label="Work"
              {...a11yProps(1)}
              iconPosition="start"
              className="tab-label"
              icon={<BusinessCenterRoundedIcon className="tab-icon" />}
            />
          </Tabs>
        </AppBar>
      </Box>
      <Box>
        <SwipeableViews
          className="tab-view"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Education />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Work />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </>
  );
};

export default AboutUsTab;
