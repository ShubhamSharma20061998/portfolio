import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./Banner.module.css";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import profileImage from "../../assets/software-developer.jpg";
import CustomDivider from "../divider/CustomDivider";
import ParaText from "../paraText/ParaText";
import CustomButtons from "../buttons/CustomButtons";

const Banner = () => {
  const paraText = [
    "Passionate MERN Full Stack Developer with a knack for turning innovative ideas into robust, scalable applications. Certified in MongoDB, Express.js, React.js, and Node.js. Proven expertise in crafting seamless user experiences and tackling complex backend challenges. Eager to contribute technical prowess to transformative projects.",
  ];

  const button = {
    icon: <SendIcon />,
    className: "contactButton",
    textContent: "Contact Me",
  };

  return (
    <Container className={styles.bannerMainContainer} id="home">
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item md={1} xs={12}>
          <Link
            href="https://www.linkedin.com/in/shubham-sharma-76861a1a0/"
            target="_blank"
          >
            <IconButton aria-label="LinkedInIcon">
              <LinkedInIcon
                sx={{ width: "3rem", height: "auto" }}
                className="bannerIcons"
              />
            </IconButton>
          </Link>
          <Link href="https://github.com/ShubhamSharma20061998" target="_blank">
            <IconButton aria-label="GitHubIcon">
              <GitHubIcon
                sx={{ width: "3rem", height: "auto" }}
                className="bannerIcons"
              />
            </IconButton>
          </Link>
        </Grid>
        <Grid item md={7} xs={12}>
          <Typography variant="h2" fontWeight={500}>
            Hello 👋, I'm
          </Typography>
          <section className={styles.animation}>
            <div className={styles.first}>
              <Typography variant="h2" fontWeight={500}>
                Shubham Sharma
              </Typography>
            </div>
            <div className={styles.second}>
              <Typography variant="h2" fontWeight={500}>
                Web Developer
              </Typography>
            </div>
            <div className={styles.third}>
              <Typography variant="h3" fontWeight={500}>
                Mern Full Stack Developer
              </Typography>
            </div>
          </section>
          {paraText.map((el, index) => (
            <ParaText key={index} text={el} />
          ))}
          <Link href="#footer">
            <CustomButtons {...button} />
          </Link>
        </Grid>
        <Grid item md={4} xs={12} sx={{ marginTop: { xs: "1rem" } }}>
          <img
            src={profileImage}
            alt="profileImage"
            className={styles.profileImage}
          />
        </Grid>
      </Grid>
      <CustomDivider />
    </Container>
  );
};

export default Banner;
