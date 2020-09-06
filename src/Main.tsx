/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";
const Main = () => {
  return (
    <div>
      {/* The Switch decides which component to show based on the current URL.*/}
      <div id="home">
        <Home />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Main;
