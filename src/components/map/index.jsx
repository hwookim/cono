import React, { useEffect } from "react";
import styled from "styled-components";

const { kakao } = window;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export default function MapPage() {
  useEffect(() => {
    const container = document.getElementById("kakao-map");
    const options = {
      center: new kakao.maps.LatLng(37.56006283612991, 126.99835789203581),
    };

    new kakao.maps.Map(container, options);
  }, []);

  return <Container id="kakao-map" />;
}
