import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

const defaultProps = {
  center: {
    lat: 56.03286705928202,
    lng: 10.136245552682205,
  },
  zoom: 11,
};

const Map = ({ items }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
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
