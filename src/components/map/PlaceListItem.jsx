import React from "react";
import styled from "styled-components";
import COLORS from "../../constants/colors";
import ICONS from "../../constants/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0;
  width: 100%;
  white-space: nowrap;
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

const DetailInfoButton = styled(Link)`
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

export default function PlaceListItem({ place }) {
  return (
    <Container>
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
      <DetailInfoButton to={"/post/" + place.id}>정보 보기</DetailInfoButton>
    </Container>
  );
}
