import React from "react";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function VideoPage() {
  return (
    <Container>
      <VideoContainer />
      <NavigationBar />
    </Container>
  );
}
