import React from "react";
import styled from "styled-components";

import PlaceListItem from "./PlaceListItem";

const Container = styled.div`
  z-index: 998;
  position: absolute;
  width: 90vw;
  max-width: 450px;
  bottom: 110px;
  left: 50%;
  transform: translate(-50%);
  padding: 10px;
  display: flex;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function PlaceInfoOverlay({ place, onClose }) {
  const closeOverlay = () => {
    onClose();
  };

  return (
    <Container>
      <CloseButton className="material-icons" onClick={closeOverlay}>
        close
      </CloseButton>
      <PlaceListItem place={place} />
    </Container>
  );
}
