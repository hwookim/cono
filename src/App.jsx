import React from "react";
import styled from "styled-components";

import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/main";
import MapPage from "./components/map";
import VideoPage from "./components/video";
import RankingPage from "./components/ranking";
import MyPage from "./components/user";

const Container = styled.div`
  margin: auto;
  max-width: 500px;
  height: calc(var(--vh, 1vh) * 100);
  box-shadow: 0 0 10px 2px gray;
  overflow: hidden;
`;

function App() {
  return (
    <Container>
      <BrowserRouter basename={"/cono"}>
        <Route path="/" exact component={MainPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/video" component={VideoPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/my" component={MyPage} />
      </BrowserRouter>
    </Container>
  );
}

export default App;
