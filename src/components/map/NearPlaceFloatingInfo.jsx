import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 55px;
  width: 100vw;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  padding: 10px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const InfoText = styled.div`
  color: ${COLORS.GRAY_TEXT};
`;

const ImgContainer = styled.div`
  margin-top: 10px;
  height: 80%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const PlaceImg = styled.img`
  width: 100px;
  margin: 0 10px;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export default function NearPlaceFloatingInfo({ places }) {
  return (
    <Container>
      <InfoContainer>
        <InfoText>가까운 코인노래방을 확인하세요.</InfoText>
        <ImgContainer>
          {places.map(({ name, photo }) => (
            <PlaceImg key={name} src={photo} alt={name} />
          ))}
        </ImgContainer>
      </InfoContainer>
    </Container>
  );
}
