import { Grid } from "@mui/material";
import React from "react";
import TabCards from "./tabCards/TabCards";

const Education = () => {
  const cardsContent = [
    {
      title: " Bachelor of Technology ",
      secondaryText: "[ CSE ] 👨‍🎓",
      subHeading: "F.I.E.M, Kolkata.",
      date: "📅 [ Aug 2017 - Aug 2021 ]",
    },
    {
      title: "Full Stack Developement ",
      secondaryText: "[ MERN ] 👩‍💻",
      subHeading: "DCT Academy, Bangalore.",
      date: "📅 [ May 2023 - Dec 2023 ]",
    },
  ];
  return (
    <Grid container spacing={2} alignItems={"center"} justifyContent={"center"}>
      {cardsContent.map((el, index) => (
        <TabCards key={index} {...el} />
      ))}
    </Grid>
  );
};

export default Education;
