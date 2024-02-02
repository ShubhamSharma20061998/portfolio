import React from "react";
import { Button } from "@mui/material";
import styles from "./ShowcaseButton.module.css";

const ShowCaseButtons = ({ buttonText, icon }) => {
  return (
    <Button
      variant="outlined"
      endIcon={icon}
      className={`${styles.button} showcaseButtons`}
    >
      {buttonText}
    </Button>
  );
};
export default ShowCaseButtons;
