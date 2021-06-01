import { MARKER_IMG } from "../constants/constants";

const { kakao } = window;

const $kakao = (() => {
  let map;
  const markers = [];

  const initMap = (targetID) => {
    const container = document.getElementById(targetID);
    const options = {
      center: new kakao.maps.LatLng(37.561371221033546, 126.99740576852703),
    };

    map = new kakao.maps.Map(container, options);
  };

  const drawMarker = (location) => {
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
      location.latitude,
      location.longitude
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);
    markers.push(marker);
  };

  const addClickEventToMarker = (place, method) => {
    kakao.maps.event.addListener(markers[place.id], "click", () => {
      method(place.id);
    });
  };

  return {
    initMap,
    drawMarker,
    addClickEventToMarker,
  };
})();

export default $kakao;
