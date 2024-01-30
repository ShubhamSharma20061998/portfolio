import { Grid, Typography } from "@mui/material";
import React from "react";
import ParaText from "../paraText/ParaText";

const ShowCase = props => {
  const content = [
    {
      text: "Welcome to our showcase of sustainable energy, where innovation meets responsibility! Our project seamlessly integrates HTML, CSS, Bootstrap, and React to bring you a dynamic and fully responsive website dedicated to advancing sustainable energy solutions.",
    },
  ];
  return (
    <Grid container>
      <Grid item>
        <img src="" alt="" />
      </Grid>
      <Grid item>
        <Typography variant="h6" fontWeight={400}>
          asdf
        </Typography>
        <ParaText />
        <Typography></Typography>
      </Grid>
    </Grid>
  );
};

export default ShowCase;
