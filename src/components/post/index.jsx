import React from "react";
import { useParams } from "react-router-dom";
import { PLACES } from "../../data/places";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import ICONS from "../../constants/icons";
import NavigationBar from "../NavigationBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px);
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
`;

const PlaceImg = styled.img`
  position: fixed;
  z-index: 0;
  width: 100vw;
  max-width: 500px;
  height: 35vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 35vh;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
`;

const Address = styled.div`
  color: ${COLORS.GRAY_TEXT};
`;

const Line = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid #d2d2d2;
`;

const Score = styled.img`
  width: 200px;
  margin: auto;
`;

const ReviewImg = styled.img`
  width: 100vw;
  max-width: 500px;
`;

export default function PostPage() {
  const { id } = useParams();
  const place = PLACES[id];

  return (
    <Container>
      <PlaceImg src={place.photo} />
      <InfoContainer>
        <Title>{place.name}</Title>
        <Address>{place.address}</Address>
        <Line />
        <Score src={ICONS.SCORE} />
        <Line />
        <ReviewImg src={ICONS.REVIEWS} />
        <Line />
      </InfoContainer>
      <NavigationBar />
    </Container>
  );
}
