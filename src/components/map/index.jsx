import React, { useEffect, useState } from "react";
import styled from "styled-components";
import $kakao from "../../kakao";

import NavigationBar from "../NavigationBar";
import SearchBar from "../SearchBar";
import NearPlaceFloatingInfo from "./NearPlaceFloatingInfo";
import PlaceList from "./PlaceList";
import PlaceInfoOverlay from "./PlaceInfoOverlay";

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
  const [place, setPlace] = useState(null);
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    $kakao.initMap("kakao-map");
    PLACES.map((place) => {
      $kakao.drawMarker(place);
      $kakao.addClickEventToMarker(place, openOverlay);
    });
  }, []);

  const openOverlay = (id) => {
    setPlace(PLACES[id]);
    setIsOverlayActive(true);
  };

  const closeOverlay = () => {
    setIsOverlayActive(false);
  };

  return (
    <Container>
      <SearchBar />
      <NearPlaceFloatingInfo places={PLACES} onClickImg={openOverlay} />
      <KakaoMap id="kakao-map" />
      {isOverlayActive && (
        <PlaceInfoOverlay place={place} onClose={closeOverlay} />
      )}
      <PlaceList places={PLACES} />
      <NavigationBar />
    </Container>
  );
}
