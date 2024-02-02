import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import footerImage from "../../assets/undraw_web_devices_re_m8sc.svg";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Box className={`${styles.footerContainer} footerContainer`} id="footer">
      <Grid container className={styles.innerContainer}>
        <Grid item md={6} xs={12}>
          <img src={footerImage} alt="footer" className={styles.footerImage} />
        </Grid>
        <Grid item md={6} xs={12} className={styles.contentContainer}>
          <Typography variant="h4" fontWeight={500}>
            Shubham Sharma
          </Typography>
          <Typography variant="h6">Mern Full Stack Developer</Typography>
          <Grid container className={styles.iconContainer}>
            <Grid item>
              <Link
                href="https://github.com/ShubhamSharma20061998"
                target="_blank"
              >
                <FiGithub className={styles.footerIcons} />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.linkedin.com/in/shubham-sharma-76861a1a0/"
                target="_blank"
              >
                <FiLinkedin className={styles.footerIcons} />
              </Link>
            </Grid>
          </Grid>
          <Typography>Made with 💗 by © Shubham.</Typography>
          <Typography>All rights reserved | 2024</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
