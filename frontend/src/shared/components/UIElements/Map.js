import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  
  const { lat, long } = props;

  useEffect(() => {
    const mapKit = window.mapkit;
    const jwt =
      "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjdYNkpQNkM4NTkifQ.eyJpc3MiOiI5OTdSTDJLWUQ5IiwiaWF0IjoxNjk5Mjg4MTc4LCJleHAiOjE3MDE4ODAxMDl9.30DDfgheHympOdg0kwSkWKyXboHyWBNMse3nLcu8scjxHYATedo2U0PWqpn6n4RZhW9OA5btW-jrk_XNzrLdcg";
    mapKit.init({
      authorizationCallback: (done) => {
        done(jwt);
      },
    });
    const center = new mapKit.Coordinate(lat, long);	// latitude, longitude
    const span = new mapKit.CoordinateSpan(0.016, 0.016);
    const region = new mapKit.CoordinateRegion(center, span);

    // const map = new mapKit.Map(mapRef.current);
    const map = new mapKit.Map(mapRef.current);
    map.region = region;
  }, [lat, long]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
