import React, { useState } from "react";
import styled from "styled-components";

import PlaceListItem from "./PlaceListItem";

import COLORS from "../../constants/colors";

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: ${({ active }) => (active ? "30%" : "calc(100% - 100px)")};
  height: ${({ active }) => (active ? "65%" : "50px")};
  width: calc(100vw - 20px);
  max-width: 480px;
  padding: 15px 10px;
  background-color: white;
  box-shadow: 0 -3px 5px 2px ${COLORS.MAIN_GRAY};
  overflow-x: hidden;
  overflow-y: ${({ active }) => (active ? "auto" : "hidden")};
  transition: 1s all;
`;

const Title = styled.div`
  padding: 0 10px;
  width: fit-content;
  font-weight: bold;
  border-bottom: 4px solid ${COLORS.MAIN};
  overflow: hidden;
`;

const CloseButton = styled.span`
  float: right;
`;

export default function PlaceList({ places }) {
  const [active, setActive] = useState(false);

  const openPlaceList = () => {
    setActive(true);
  };

  const closePlaceList = (event) => {
    event.stopPropagation();
    setActive(false);
  };

  return (
    <Container active={active} onClick={openPlaceList}>
      <CloseButton className="material-icons" onClick={closePlaceList}>
        close
      </CloseButton>
      <Title>요즘 많이 찾는 노래방</Title>
      {places.map((place) => (
        <PlaceListItem key={place.id} place={place} />
      ))}
    </Container>
  );
}
