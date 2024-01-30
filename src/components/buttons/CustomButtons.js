import { Button } from "@mui/material";
import React from "react";

const CustomButtons = ({ icon, className, textContent }) => {
  return (
    <Button variant="outlined" endIcon={icon} className={className}>
      {textContent}
    </Button>
  );
};

export default CustomButtons;
