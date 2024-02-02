import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import styles from "./ShowCase.module.css";
import restock from "../../assets/restock.png";
import sustainableEnergy from "../../assets/sustainableEnergy.png";
import architecturalFirm from "../../assets/architecturalFirm.png";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import ShowCaseButtons from "../buttons/ShowCaseButtons";

const ShowCase = props => {
  const content = [
    {
      src: restock,
      alt: "restock",
      title: "reStock 📦",
      text: "Introducing reStock: your ultimate B2B eCommerce solution bridging wholesalers and shopkeepers seamlessly. Leveraging my full-stack expertise, reStock is crafted with Node.js, MongoDB, Express.js, and React.js, empowered by Mongoose for database management. With features like Node Mailer for efficient communication, React Router DOM for smooth navigation, Redux for robust state management, and Multer for file handling, reStock ensures a streamlined experience. Security is paramount, incorporating bcryptjs, Formik, Yup, and JWT tokens, along with Express Validator for custom form validation. Embracing responsiveness, reStock employs Material UI and media queries, delivering a flawless experience across all devices. Experience the B2B commerce with reStock today.",
      tech: "HTML, CSS , Javascript, Node.js, MongoDB, Express.js, React.js, Mongoose, Node Mailer, React Router DOM, React Hooks, Conditional Rendering, Redux, Multer, bcryptjs, Formik, Yup, Custom Validations, JWT tokens, Express Validator, Material UI, Media queries.",
      link: "https://restock-shubham.netlify.app/",
      github_button_frontend: {
        buttonText: "GitHub-frontend",
        icon: <GitHubIcon />,
      },
      github_button_backend: {
        buttonText: "GitHub-backend",
        icon: <GitHubIcon />,
      },
      github_link_frontend:
        "https://github.com/ShubhamSharma20061998/reStock-frontend",
      github_link_backend:
        "https://github.com/ShubhamSharma20061998/reStock-backend",
      Demo_button: { buttonText: "Demo", icon: <LaunchRoundedIcon /> },
    },
    {
      src: sustainableEnergy,
      alt: "Sustainable Energy",
      title: "Sustainable Energy ⚡",
      text: "Welcome to my showcase of sustainable energy innovation! my project exemplifies a commitment to a greener future by harnessing the power of HTML, CSS, Bootstrap, and React to create a fully responsive website. With sleek design and intuitive navigation, users can seamlessly explore the latest advancements in sustainable energy technology. From solar panels to wind turbines, my website highlights the transformative impact of renewable energy sources on my planet. Join us in championing sustainability and empowering a brighter tomorrow!",
      tech: "HTML, CSS, Bootstrap, React, Media queries.",
      link: "https://sustainable-energy.netlify.app/",
      github_button: { buttonText: "GitHub", icon: <GitHubIcon /> },
      github_link: "https://github.com/ShubhamSharma20061998/BlueBird",
      Demo_button: { buttonText: "Demo", icon: <LaunchRoundedIcon /> },
    },
    {
      src: architecturalFirm,
      alt: "Architectural Firm",
      title: "Architectural Firm 🚧",
      text: "Experience architectural excellence on any device with my fully responsive showcase project.Crafted using HTML, CSS, JavaScript, React, Bootstrap, and enhanced with Email.js integration, my site seamlessly adapts to every screen size.Utilizing media queries, we ensure an immersive experience, allowing you to explore my portfolio, services, and contact options effortlessly.From stunning visuals to smooth interactions, discover how my innovative blend of technologies delivers architectural brilliance at your fingertips.",
      tech: "HTML, CSS, Bootstrap, React, Email.js, Media queries.",
      link: "https://structural-firm-site.netlify.app/",
      github_button: { buttonText: "GitHub", icon: <GitHubIcon /> },
      github_link:
        "https://github.com/ShubhamSharma20061998/structural_Engineering_react",
      Demo_button: { buttonText: "Demo", icon: <LaunchRoundedIcon /> },
    },
  ];

  return content.map(
    (
      {
        src,
        alt,
        title,
        text,
        tech,
        link,
        github_button,
        Demo_button,
        github_button_frontend,
        github_button_backend,
        github_link,
        github_link_frontend,
        github_link_backend,
      },
      index
    ) => {
      return (
        <Grid container key={index} className={styles.project_container}>
          <Grid item md={4}>
            <Link href={link} target="_blank">
              <img src={src} alt={alt} className={styles.project_image} />
            </Link>
          </Grid>
          <Grid item md={7} className={styles.textContainer}>
            <Typography variant="h6" fontWeight={500}>
              {title}
            </Typography>
            <Typography>{text}</Typography>
            <Typography>
              <span className={styles.heading}>Tech Used:</span> {tech}
            </Typography>
            <Grid container className={styles.buttonContainer}>
              {github_button && (
                <Grid item>
                  <Link href={github_link} target="_blank">
                    <ShowCaseButtons {...github_button} />
                  </Link>
                </Grid>
              )}
              {github_button_frontend && (
                <Grid item>
                  <Link href={github_link_frontend} target="_blank">
                    <ShowCaseButtons {...github_button_frontend} />
                  </Link>
                </Grid>
              )}
              {github_button_backend && (
                <Grid item>
                  <Link href={github_link_backend} target="_blank">
                    <ShowCaseButtons {...github_button_backend} />
                  </Link>
                </Grid>
              )}
              <Grid item>
                <Link href={link} target="_blank">
                  <ShowCaseButtons {...Demo_button} />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    }
  );
};

export default ShowCase;
