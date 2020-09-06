/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import styled from "styled-components";
const background_color = "#A9A9A947";

const StandardContainer = styled.div({
  textAlign: "center" as "center",
});

const AboutPicture = styled.img({
  borderRadius: 20,
  maxWidth: "60%",
  boxShadow: "3px 3px 5px #ccc",
});
function About() {
  return (
    <React.Fragment>
      <div css={{ height: 21, backgroundColor: "#F1F1F1" }} />
      <div css={{ height: 35, backgroundColor: "lightgray" }} />
      <div
        css={{
          minHeight: 750,
          backgroundColor: background_color,
          paddingBottom: 250,
        }}
      >
        <StandardContainer css={{ paddingTop: 20, fontSize: 25 }}>
          About Me
        </StandardContainer>
        <StandardContainer css={{ padding: 20 }}>
          <AboutPicture src="./chicagoskyline.jpg" />
        </StandardContainer>
        <StandardContainer
          css={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <div
            css={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div
              css={{
                fontSize: 20,
                width: 800,
                paddingBottom: "2rem",
                textAlign: "left",
              }}
            >
              I was raised in Hoffman Estates, a suburb of Chicago. I grew
              up enjoying math and science classes, so I knew engineering was
              the right direction for me. I started my college career by going
              to a local community college called Harper College. While I was at
              Harper, I took an introduction to programming course which was
              taught in C++. I fell in love. I found myself spending late nights
              at Dunkin' Donuts creating unnecessarily complicated projects for
              simple assignments. As a result, I started checking out math books
              from the library to better my knowledge of how to write complex
              programs and started combining my engineering knowledge with
              software to effectively do all the calculation work in my
              engineering classes for me, reducing my job to giving the program
              its input.
            </div>
          </div>
          <div
            css={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <div
              css={{
                fontSize: 20,
                width: 800,
                paddingBottom: "2rem",
                textAlign: "left",
              }}
            >
              After earning my Associate's Degree in Engineering Science in
              2018, I began attending Iowa State University in Ames, Iowa as a
              Mechanical Engineering major with intent for a Computer Science
              minor. After creating countless engineering tools as a hobby, I
              realized in late 2019 that I wanted my career to heavily involve
              software development and declared a second major in Computer
              Science.
            </div>
          </div>
          <div css={{ fontSize: 20, width: 800, textAlign: "left" }}>
            I set my sights for a Software internship in November of 2019, and
            took a chance, turning down three mechanical engineering internship
            offers. I was fortunate enough to be offered an internship at Apptio
            based out of Bellevue, Washington, as a full-stack software
            development intern. At Apptio, I was challenged to learn new
            technologies and practices daily, and found there was always
            something new to learn. For me, this was a dream. I also learned
            that I love not only back-end development, but also front-end! My
            experience at Apptio validated my decision to go into software and
            was everything I had hoped for in a software job. Now, I am
            searching for a full-stack development position!
          </div>
        </StandardContainer>
      </div>
    </React.Fragment>
  );
}

export default About;
