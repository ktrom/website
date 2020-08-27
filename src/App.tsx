/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const YeetButton = styled(Button)({});

const Header = styled.div({
  backgroundColor: "#F1F1F1",
  textAlign: "center" as "center",
  padding: 20,
});

const ButtonContainer = styled.div({
  display: "inline-flex",
  flexDirection: "row" as "row",
  justifyContent: "space-around",
  width: 300,
});

function App() {
  return (
    <div className="Page">
      <Header>
        <ButtonContainer>
          <YeetButton variant="primary">hi</YeetButton>
          <YeetButton variant="success">yo</YeetButton>
          {/*<Button variant="primary">ellao</Button>*/}
        </ButtonContainer>
      </Header>
    </div>
  );
}

export default App;
