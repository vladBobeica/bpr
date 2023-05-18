import GoogleMapReact from "google-map-react";
import { useMediaQuery } from "@mui/material";

const coordinates = { lat: 0, lng: 0 };
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const mapContainerStyles = { height: "85vh", width: "100%" };

const Map = () => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div style={mapContainerStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        defaultZoom={14}
        center={coordinates}
        margin={[50, 50, 50, 50]}
      />
    </div>
  );
};

export default Map;
