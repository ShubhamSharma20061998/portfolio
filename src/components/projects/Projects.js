import { Container } from "@mui/material";
import React from "react";
import SubHeading from "../subHeading/SubHeading";
import ShowCase from "./ShowCase";

const Projects = () => {
  const heading = { subHeading: "Projects ☕" };
  return (
    <Container>
      <SubHeading {...heading} />
      <ShowCase />
    </Container>
  );
};

export default Projects;
