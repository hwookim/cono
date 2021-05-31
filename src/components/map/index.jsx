import React, { useEffect } from "react";
import styled from "styled-components";

import NavigationBar from "../NavigationBar";

import { PLACES } from "../../data/places";
import { MARKER_IMG } from "../../constants/constants";
import SearchBar from "../SearchBar";
import NearPlaceFloatingInfo from "./NearPlaceFloatingInfo";

const { kakao } = window;

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
  let map;

  useEffect(() => {
    const container = document.getElementById("kakao-map");
    const options = {
      center: new kakao.maps.LatLng(37.561371221033546, 126.99740576852703),
    };

    map = new kakao.maps.Map(container, options);

    PLACES.forEach(drawMarker);
  }, []);

  const drawMarker = (place) => {
    const width = 36;
    const height = 36;
    const imageSize = new kakao.maps.Size(width, height);
    const imageOption = { offset: new kakao.maps.Point(width / 2, height) };

    const markerImage = new kakao.maps.MarkerImage(
      MARKER_IMG,
      imageSize,
      imageOption
    );
    const markerPosition = new kakao.maps.LatLng(
      place.latitude,
      place.longitude
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
  };

  return (
    <Container>
      <SearchBar />
      <NearPlaceFloatingInfo places={PLACES} />
      <KakaoMap id="kakao-map" />
      <NavigationBar />
    </Container>
  );
}
