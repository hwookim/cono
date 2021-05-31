import React from "react";
import styled from "styled-components";

import ICONS from "../../constants/icons";
import COLORS from "../../constants/colors";

const Container = styled.div`
  z-index: 998;
  position: absolute;
  width: 90vw;
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

const PlaceImg = styled.img`
  width: 30%;
  height: 15vh;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-end;
`;

const Title = styled.div`
  font-size: 1.125rem;
`;

const Address = styled.div`
  font-size: 0.9rem;
  color: ${COLORS.GRAY_TEXT};
`;

const CommunityInfo = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: flex-end;
`;

const Comments = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.GRAY_TEXT};
`;

const CommentIcon = styled.img`
  margin: 0 5px;
  height: 20px;
  object-position: 0 3px;
`;

const Likes = styled.span`
  font-size: 0.9rem;
  color: ${COLORS.MAIN};
`;

const LikeIcon = styled.img`
  margin: 0 5px;
  height: 20px;
`;

const DetailInfoButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 4px 8px;
  height: fit-content;
  white-space: nowrap;
  font-weight: bold;
  background-color: white;
  color: ${COLORS.MAIN};
  border: 2px solid ${COLORS.MAIN};
  border-radius: 15px;
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
      <PlaceImg src={place.photo} alt={place.name} />
      <Info>
        <Title>{place.name}</Title>
        <Address>{place.address}</Address>
        <CommunityInfo>
          <Comments>{place.comments.length}</Comments>
          <CommentIcon src={ICONS.COMMENT} />
          <Likes>{place.likes}</Likes>
          <LikeIcon src={ICONS.LIKE_ACTIVE} />
        </CommunityInfo>
      </Info>
      <DetailInfoButton>정보 보기</DetailInfoButton>
    </Container>
  );
}
