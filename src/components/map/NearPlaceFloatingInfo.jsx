import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";

const Container = styled.div`
  z-index: 999;
  position: absolute;
  top: 55px;
  width: 100vw;
  max-width: 500px;
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
  margin: 0 10px;
  width: 27.5%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export default function NearPlaceFloatingInfo({ places, onClickImg }) {
  return (
    <Container>
      <InfoContainer>
        <InfoText>가까운 코인노래방을 확인하세요.</InfoText>
        <ImgContainer>
          {places.map(({ id, name, photo }) => (
            <PlaceImg
              key={id}
              src={photo}
              alt={name}
              onClick={() => onClickImg(id)}
            />
          ))}
        </ImgContainer>
      </InfoContainer>
    </Container>
  );
}
