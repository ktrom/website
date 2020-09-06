/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const separationBar = "#A9A9A947";
const background = "#F1F1F1";

const StandardContainer = styled.div({
  textAlign: "center" as "center",
});

const ContactPicture = styled.img({
  borderRadius: "10%",
  maxWidth: "100%",
  boxShadow: "3px 3px 5px #ccc",
  width: "25%",
  height: "25%",
});
function Contact() {
  return (
    <React.Fragment>
      <div css={{ height: 21, backgroundColor: separationBar }} />
      <div css={{ height: 35, backgroundColor: "lightgray" }} />
      <div
        css={{
          minHeight: 800,
          backgroundColor: background,
        }}
      >
        <StandardContainer css={{ paddingTop: 20, fontSize: 25 }}>
          Let's Get In Touch!
        </StandardContainer>
        <StandardContainer css={{ padding: 20 }}>
          <a href="mailto:kylemtrom@gmail.com">Email</a>
        </StandardContainer>
      </div>
    </React.Fragment>
  );
}

export default Contact;
