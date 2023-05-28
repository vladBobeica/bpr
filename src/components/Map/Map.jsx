import GoogleMapReact from "google-map-react";
import { useMediaQuery, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const mapContainerStyles = { height: "100%", width: "100%" };

const defaultCoordinates = {
  lat: 55.4632518,
  lng: 11.7214979,
};

const Map = ({ items, coordinates = defaultCoordinates }) => {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div style={mapContainerStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={coordinates}
        defaultZoom={10}
        center={coordinates}
        margin={[50, 50, 50, 50]}
      >
        {items &&
          items.map((item) => {
            console.log(
              "item geo :: ",
              item.location?.value?.coordinates?.value
            );
            return (
              <div
                style={{
                  position: "absolute",

                  zIndex: 1,
                  "&:hover": { zIndex: 2 },
                }}
                lat={parseCommaFloat(
                  item.location?.value?.coordinates?.value[1]
                )}
                lng={parseCommaFloat(
                  item.location?.value?.coordinates?.value[0]
                )}
                key={item.id}
              >
                <LocationOnIcon color="primary" fontSize="large" />
              </div>
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;

const parseCommaFloat = (stringNumber) => {
  if (!stringNumber) return;

  return parseFloat(stringNumber.replace(/,/, "."));
};
