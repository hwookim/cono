import React, { useEffect } from "react";
import styled from "styled-components";
import $kakao from "../kakao";

import NavigationBar from "../NavigationBar";
import SearchBar from "../SearchBar";
import NearPlaceFloatingInfo from "./NearPlaceFloatingInfo";
import PlaceList from "./PlaceList";

import { PLACES } from "../../data/places";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const KakaoMap = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MapPage() {
  useEffect(() => {
    $kakao.initMap("kakao-map");
    PLACES.map($kakao.drawMarker);
  }, []);

  return (
    <Container>
      <SearchBar />
      <NearPlaceFloatingInfo places={PLACES} />
      <KakaoMap id="kakao-map" />
      <PlaceList places={PLACES} />
      <NavigationBar />
    </Container>
  );
}
