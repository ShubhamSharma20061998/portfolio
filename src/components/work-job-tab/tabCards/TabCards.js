import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./TabCards.css";

const TabCards = ({ title, subHeading, date, secondaryText }) => {
  return (
    <Grid item>
      <Paper elevation={2} className="Tab-card-aboutme">
        <Container sx={{ padding: "0.5rem" }}>
          <Typography variant="h6" fontWeight={400}>
            {title}
            <span className="secondaryText">{secondaryText}</span>
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            {subHeading}
          </Typography>
          <Typography variant="caption">{date}</Typography>
        </Container>
      </Paper>
    </Grid>
  );
};

export default TabCards;
