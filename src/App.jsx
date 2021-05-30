import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/main";
import MapPage from "./components/map";

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
        <Route path="/map" component={MapPage} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
