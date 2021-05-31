import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import logoImg from "../../assets/logo.png";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 12.5rem;
`;

const SubTitle = styled.h2`
  margin: 10px 0 0;
  font-size: 1rem;
  font-weight: normal;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 3.5rem;
`;

export default function MainPage() {
  const history = useHistory();

  setTimeout(() => {
    history.push("/map");
  }, 1500);

  return (
    <Container>
      <Logo src={logoImg} />
      <SubTitle>당신의 노래방 동반자</SubTitle>
      <Title>CONO</Title>
    </Container>
  );
}
