import { Container, Grid, Link } from "@mui/material";
import React from "react";
import developerImage from "../../assets/undraw_building_websites_i78t.svg";
import styles from "./About.module.css";
import SubHeading from "../subHeading/SubHeading";
import ParaText from "../paraText/ParaText";
import ArticleIcon from "@mui/icons-material/Article";
import CustomButtons from "../buttons/CustomButtons";
import CustomDivider from "../divider/CustomDivider";
import AboutUsTab from "../work-job-tab/AboutUsTab";
import resume from "../../assets/Shubham_Resume.pdf";

const AboutMe = () => {
  const subHeading = [{ subHeading: "About Me 📖" }];

  const paraText = [
    {
      text: "As a certified MERN Full Stack Developer, I bring a dynamic blend of skills in MongoDB, Express.js, React.js, and Node.js. With a proven track record of transforming concepts into fully functional and scalable applications, I thrive on crafting seamless user experiences and navigating intricate challenges on both the frontend and backend. My commitment to staying abreast of the latest industry trends and obtaining certifications reflects my dedication to maintaining cutting-edge proficiency. Armed with a solid foundation in web development, I am adept at collaborating with cross-functional teams to deliver high-quality solutions. Whether optimizing database performance, implementing responsive user interfaces, or ensuring robust server-side functionality, I approach each project with a passion for innovation and an unwavering commitment to excellence. With a keen eye for detail and a continuous learning mindset, I am poised to contribute my technical acumen and creativity to elevate projects to new heights.",
    },
  ];

  const button = {
    icon: <ArticleIcon />,
    className: "contactButton",
    textContent: "Resume",
  };

  return (
    <Container id="about">
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item md={4}>
          <img
            src={developerImage}
            alt="Developer"
            className={styles.developerImage}
          />
        </Grid>
        <Grid item md={7.5}>
          {subHeading.map((el, index) => (
            <SubHeading key={index} {...el} />
          ))}
          {paraText.map((el, index) => (
            <ParaText key={index} {...el} />
          ))}
          <Link href={resume} target="_blank">
            <CustomButtons {...button} />
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        marginTop={"3rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item>
          <AboutUsTab />
        </Grid>
      </Grid>
      <CustomDivider />
    </Container>
  );
};

export default AboutMe;
