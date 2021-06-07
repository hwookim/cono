import React from "react";
import { useParams } from "react-router-dom";
import { PLACES } from "../../data/places";

export default function PostPage() {
  const { id } = useParams();
  const place = PLACES[id];

  return <>{place.name}</>;
}
