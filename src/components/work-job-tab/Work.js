import React from "react";
import TabCards from "./tabCards/TabCards";
import { Grid } from "@mui/material";

const Work = () => {
  const workEx = [
    {
      title: "Frontend Trainee 👨‍💻",
      subHeading: "Test Yantra Software Solutions",
      date: "📅 [ Jan 2022 - Mar 2023 ]",
    },
    {
      title: "Associate Software Developer 👨‍💻",
      subHeading: "Test Yantra Software Solutions",
      date: "📅 [ Apr 2022 - Jan 2023 ]",
    },
  ];
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {workEx.map((el, index) => (
        <TabCards key={index} {...el} />
      ))}
    </Grid>
  );
};

export default Work;
