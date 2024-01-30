import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import SubHeading from "../subHeading/SubHeading";
import ListingItems from "./ListingItems/ListingItems";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FaReact, FaNpm, FaWix } from "react-icons/fa";
import { IoServerSharp } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiPostman } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import HandymanIcon from "@mui/icons-material/Handyman";
import { DiVisualstudio } from "react-icons/di";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomDivider from "../divider/CustomDivider";

const SkillsTools = () => {
  const sectionHeading = [{ subHeading: "Skills and Tools 🔨" }];
  const listingItems = [
    {
      label: "Frontend",
      duration: "12+ months",
      title: "FRONTEND",
      titleIcon: <CodeIcon className="listIcon" />,
      listItems: [
        { listTitle: "Html", listTitleIcon: <HtmlIcon className="listIcon" /> },
        { listTitle: "Css", listTitleIcon: <CssIcon className="listIcon" /> },
        {
          listTitle: "Javascript",
          listTitleIcon: <JavascriptIcon className="listIcon" />,
        },
        {
          listTitle: "React.js",
          listTitleIcon: <FaReact className="listIcon" />,
        },
      ],
    },
    {
      label: "Backend",
      duration: "6+ months",
      title: "BACKEND",
      titleIcon: <IoServerSharp className="listIcon" />,
      listItems: [
        {
          listTitle: "Node.js",
          listTitleIcon: <FaNodeJs className="listIcon" />,
        },
        {
          listTitle: "Express.js",
          listTitleIcon: <SiExpress className="listIcon" />,
        },
        {
          listTitle: "Mongodb",
          listTitleIcon: <BiLogoMongodb className="listIcon" />,
        },
      ],
    },
    {
      label: "Tech Tools",
      duration: "12+ months",
      title: "OTHER TECH TOOLS",
      titleIcon: <HandymanIcon className="listIcon" />,
      listItems: [
        {
          listTitle: "Visual Studio Code",
          listTitleIcon: <DiVisualstudio className="listIcon" />,
        },
        {
          listTitle: "Node Package Manager",
          listTitleIcon: <FaNpm className="listIcon" />,
        },
        {
          listTitle: "Wix Website Builder",
          listTitleIcon: <FaWix className="listIcon" />,
        },
        {
          listTitle: "Github",
          listTitleIcon: <GitHubIcon className="listIcon" />,
        },
        {
          listTitle: "Postman",
          listTitleIcon: <SiPostman className="listIcon" />,
        },
      ],
    },
  ];
  return (
    <Container>
      {sectionHeading.map((el, index) => (
        <SubHeading key={index} {...el} />
      ))}
      <Paper elevation={2} sx={{ borderRadius: "0.7rem" }}>
        <Grid
          container
          sx={{ padding: "1rem" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {listingItems.map((el, index) => (
            <ListingItems key={index} {...el} />
          ))}
        </Grid>
      </Paper>
      <CustomDivider />
    </Container>
  );
};

export default SkillsTools;
