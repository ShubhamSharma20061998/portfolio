import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import AboutMe from "./components/aboutMe/AboutMe";
import SkillsTools from "./components/skills-tools/SkillsTools";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <SkillsTools />
      <Projects />
    </>
  );
};

export default App;
