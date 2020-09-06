/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
import Main from "./Main";
const lightGrey = "#F1F1F1";

const StandardContainer = styled.div({
  backgroundColor: lightGrey,
  textAlign: "center" as "center",
});

const HomePicture = styled.img({
  borderRadius: "50%",
  maxWidth: "100%",
  boxShadow: "3px 3px 5px #ccc",
  width: "200px",
  height: "200px",
});
function App() {
  return (
    <div>
      <Navbar
        bg="primary"
        variant="dark"
        css={{ position: "fixed", top: 0, width: "100%" }}
      >
        <Navbar.Brand href="#">Kyle Trom</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#experience">experience</Nav.Link>
          <Nav.Link href="#about">about me</Nav.Link>
          <Nav.Link href="#contact">contact me!</Nav.Link>
        </Nav>
      </Navbar>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
