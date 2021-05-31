import React from "react";
import styled from "styled-components";

import PlaceListItem from "./PlaceListItem";

import COLORS from "../../constants/colors";

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 30%;
  //top: calc(100% - 120px);
  width: calc(100vw - 20px);
  max-width: 480px;
  height: 65%;
  padding: 15px 10px;
  background-color: white;
  box-shadow: 0 -3px 5px 2px ${COLORS.MAIN_GRAY};
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.div`
  padding: 0 10px;
  width: fit-content;
  font-weight: bold;
  border-bottom: 4px solid ${COLORS.MAIN};
  overflow: hidden;
`;

export default function PlaceList({ places }) {
  return (
    <Container>
      <Title>요즘 많이 찾는 노래방</Title>
      {places.map((place) => (
        <PlaceListItem key={place.name} place={place} />
      ))}
    </Container>
  );
}
