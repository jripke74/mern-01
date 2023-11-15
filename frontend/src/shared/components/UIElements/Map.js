import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = (props) => {
  const mapRef = useRef();
  
  const { lat, long } = props;

  useEffect(() => {
    const mapKit = window.mapkit;
    const jwt =
      "";
    mapKit.init({
      authorizationCallback: (done) => {
        done(jwt);
      },
    });
    const center = new mapKit.Coordinate(lat, long);	// latitude, longitude
    const span = new mapKit.CoordinateSpan(0.016, 0.016);
    const region = new mapKit.CoordinateRegion(center, span);
    console.log(mapKit);
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
