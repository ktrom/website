/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
const background_color = "#A9A9A947";

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
      <div css={{ height: 21, backgroundColor: "#F1F1F1" }} />
      <div css={{ height: 35, backgroundColor: "lightgray" }} />
      <div
        css={{
          minHeight: 800,
          backgroundColor: background_color,
        }}
      >
        <StandardContainer css={{ paddingTop: 20, fontSize: 25 }}>
          Let's Get In Touch!
        </StandardContainer>
        <StandardContainer css={{ padding: 20 }}>
          {/*<ContactPicture src="https://res.cloudinary.com/trommah/image/upload/v1598575304/DSC_0231_morwjs.jpg" />*/}
        </StandardContainer>
      </div>
    </React.Fragment>
  );
}

export default Contact;
