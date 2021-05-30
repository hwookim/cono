import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/main";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  height: 100vh;
  box-shadow: 0 0 10px 2px gray;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
