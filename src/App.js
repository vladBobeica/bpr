import { useEffect, useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { Grid, CssBaseline } from "@mui/material";
import { getItemsData } from "../src/api/index";
import GoogleMapReact from "google-map-react";

const defaultCoordinates = {
  lat: 55.4632518,
  lng: 11.7214979,
};

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

// const points = [
//   { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
//   { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
//   { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
// ];

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // setItems(entitiesMock);
    // TODO: Uncomment the API fetch
    getItemsData(defaultCoordinates.lat, defaultCoordinates.lng)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fetched data");
      });
  }, []);

  useEffect(() => setFilteredItems(filterDevices(items)), [items]);

  return (
    <>
      <CssBaseline />
      <SearchAppBar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4} style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: "100%", overflowY: "auto" }}>
            <List items={filteredItems} />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div style={{ height: "85vh", width: "100%" }}>
            <Map items={filteredItems} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

const filterDevices = (items) =>
  items.filter(
    (item) =>
      item?.location?.value?.coordinates?.value?.length === 2 &&
      item?.type === "Streetlight"
  );

const parseCommaFloat = (stringNumber) => {
  if (!stringNumber) return;

  return parseFloat(stringNumber.replace(/,/, "."));
};
