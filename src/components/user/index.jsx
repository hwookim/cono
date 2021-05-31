import React from "react";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MyPage() {
  return (
    <Container>
      <UserContainer />
      <NavigationBar />
    </Container>
  );
}
