import { Typography } from "@mui/material";
import React from "react";

const ParaText = ({ text }) => {
  return (
    <Typography fontWeight={400} sx={{ marginBottom: "3rem" }}>
      {text}
    </Typography>
  );
};

export default ParaText;
