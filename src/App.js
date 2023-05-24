import { useEffect, useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { Grid, CssBaseline } from "@mui/material";
import { getItemsData } from "../src/api/index";

import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [items, setItems] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const debouncedCoordinates = useDebounce(coordinates, 2000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (debouncedCoordinates.lat && debouncedCoordinates.lng) {
      getItemsData(debouncedCoordinates.lat, debouncedCoordinates.lng)
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("Fetched data");
        });
    }
  }, [debouncedCoordinates]);

  // useEffect(() => {
  //   console.log(coordinates);
  //   getItemsData(coordinates.lat, coordinates.lng).then((data) => {
  //     console.log(data);
  //     setItems(data);
  //   });
  // }, [coordinates]);

  return (
    <>
      <CssBaseline />
      <SearchAppBar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4} style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: "100%", overflowY: "auto" }}>
            <List items={items} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ height: "85vh", width: "100%" }}>
            <Map setCoordinates={setCoordinates} coordinates={coordinates} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
