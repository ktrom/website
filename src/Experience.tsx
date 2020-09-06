/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const background_color = "#F1F1F1";

const StandardContainer = styled.div({
  textAlign: "center" as "center",
});

const ExperienceContainer = styled.div({
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "space-between",
  margin: "0 0 7rem 0",
  width: "75rem",
  // borderWidth: 1,
  // borderStyle: "solid",
  // borderColor: "lightgrey",
  // borderRadius: 10,
});

const TextBox = styled.div({
  fontSize: "20px",
  textAlign: "left" as "left",
  width: "36.5rem",
});

const ExperiencePicture = styled.img({
  borderRadius: "10%",
  maxWidth: "100%",
  boxShadow: "3px 3px 5px #ccc",
  width: "25%",
  height: "25%",
});

const LogoPicture = styled.img({
  maxWidth: "100%",
  width: "35%",
  height: "35%",
});
function Experience() {
  return (
    <React.Fragment>
      <div css={{ height: 21, backgroundColor: "#A9A9A947" }} />
      <div css={{ height: 35, backgroundColor: "lightgray" }} />
      <div
        css={{
          minHeight: 750,
          backgroundColor: background_color,
          paddingBottom: 250,
          textAlign: "center",
        }}
      >
        <StandardContainer
          css={{ paddingTop: 20, paddingBottom: 50, fontSize: 25 }}
        >
          Experience
        </StandardContainer>
        {/*<StandardContainer css={{ padding: 20 }}>*/}
        {/*  <ExperiencePicture src="https://res.cloudinary.com/trommah/image/upload/v1598575304/DSC_0231_morwjs.jpg" />*/}
        {/*</StandardContainer>*/}
        <ExperienceContainer css={{ padding: 20 }}>
          <LogoPicture src="./apptio.png" />
          <TextBox>
            In the Summer of 2020 I worked a remote internship for Apptio, based
            out of Bellevue, Washington. Apptio makes{" "}
            <a
              href={
                "https://www.google.com/search?q=Technology%20Business%20Management"
              }
              target="popup"
            >
              technology business management
            </a>{" "}
            software that helps companies manage their IT spending.
            <br />
            <br />I created a new feature on the{" "}
            <a
              href={
                "https://www.apptio.com/products/agile-investment-management/#:~:text=Apptio%20Agile%20Investment%20Management%20provides,for%20organizations%20utilizing%20Agile%20methodologies.&text=Track%20the%20costs%20to%20innovate%2C%20evolve%2C%20and%20maintain%20Agile%20products."
              }
              target="popup"
            >
              Agile Investment Management
            </a>{" "}
            tool which enabled users to customize layouts across the
            application.
            <br />
            <br />I developed using a variety of frameworks including
            TypeScript, React.js, Redis, Java, and SQL.
          </TextBox>
        </ExperienceContainer>
        <ExperienceContainer css={{ padding: 20 }}>
          <TextBox>
            In the Spring of 2020 I TA'd for the Data Structures and Algorithms
            class at Iowa State, which I had been a tutor for before. <br />
            <br />
            In this position, I taught introductory data structures and
            algorithms, designed projects for the students to practice the
            material, and created JUnit test suites to grade the projects.
            <br />
            <br />
            In this position I refined my Java knowledge and JUnit testing
            skills.
          </TextBox>
          <LogoPicture src="./iowastate.png" />
        </ExperienceContainer>
        <ExperienceContainer css={{ padding: 20 }}>
          <LogoPicture src="./AltecLogo.png" />
          <TextBox>
            During the Fall of 2019, I was an Applications Engineering Co-Op at
            Altec Industries in St. Joseph, Missouri. Altec creates{" "}
            <a
              href={
                "https://store.altecsentry.com/images/courses/687363-SEN-ANSI-Trng-Req-17.1.png"
              }
              target="popup"
            >
              Aerial Units and Digger Derricks.
            </a>{" "}
            <br />
            <br />
            While at Altec, I worked with Solidworks' API to automatically build
            truck models instead of having to manually "assemble" them with CAD.
            I also noticed that the engineers were repeatedly performing the
            same stress calculations and made a Java application that could do
            it for them.
          </TextBox>
        </ExperienceContainer>
      </div>
    </React.Fragment>
  );
}

export default Experience;
