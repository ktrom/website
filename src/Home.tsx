/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const lightGrey = "#F1F1F1";

const StandardContainer = styled.div({
  backgroundColor: lightGrey,
  textAlign: "center" as "center",
});

const HomePicture = styled.img({
  borderRadius: "50%",
  maxWidth: "100%",
  boxShadow: "3px 3px 5px #ccc",
  width: "275px",
  height: "275px",
});
function Home() {
  return (
    <div
      css={{ backgroundColor: lightGrey, marginTop: 56, minHeight: "700px", paddingBottom:250 }}
    >
      <StandardContainer css={{ paddingTop: 60, fontSize: 25 }}>
        Hi! I'm Kyle. Welcome to my website!
      </StandardContainer>
      <StandardContainer css={{ padding: 30 }}>
        <HomePicture src="https://res.cloudinary.com/trommah/image/upload/v1598577738/DSC_0331_2_jxe5b8.jpg" />
      </StandardContainer>
      <StandardContainer css={{ display: "flex", justifyContent: "center" }}>
        <div css={{ fontSize: 25, width: 600 }}>
          I am a Senior in Computer Science at Iowa State University and I will
          be graduating in May, 2021. I have a passion for full stack
          development and am actively looking for a full-time developer position
          near Seattle, Washington beginning May, 2021.
        </div>
      </StandardContainer>
    </div>
  );
}

export default Home;
