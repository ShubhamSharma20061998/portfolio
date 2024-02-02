import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import AboutMe from "./components/aboutMe/AboutMe";
import SkillsTools from "./components/skills-tools/SkillsTools";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <SkillsTools />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
