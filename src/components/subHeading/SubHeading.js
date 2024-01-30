import { Typography } from "@mui/material";
import React from "react";
import styles from "./SubHeading.module.css";

const SubHeading = ({ subHeading }) => {
  return (
    <Typography
      variant="h3"
      fontWeight={500}
      sx={{ marginBottom: "3rem" }}
      className={styles.subHeading}
    >
      {subHeading}
    </Typography>
  );
};

export default SubHeading;
