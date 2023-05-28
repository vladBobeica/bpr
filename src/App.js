import { useEffect, useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import LoginPage from "./components/Login/LoginPage";
import { Grid, CssBaseline } from "@mui/material";
import { getItemsData } from "../src/api/index";

const defaultCoordinates = {
  lat: 55.4632518,
  lng: 11.7214979,
};

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getItemsData(defaultCoordinates.lat, defaultCoordinates.lng)
      .then((data) => {
        setItems(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
        console.log("Fetched data");
      });
  }, []);

  useEffect(() => setFilteredItems(filterDevices(items)), [items]);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    const filteredItems = filterDevices(items).filter((item) =>
      item.id.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  if (!loggedIn) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <>
      <CssBaseline />
      <SearchAppBar handleSearch={handleSearch} />
      <Grid container spacing={3} style={{ marginLeft: 0, width: "100%" }}>
        <Grid item xs={12} md={3} style={{ position: "relative", zIndex: 1 }}>
          <div style={{ height: "100%", overflowY: "auto" }}>
            <List items={filteredItems} isLoading={isLoading} />
          </div>
        </Grid>
        <Grid item xs={12} md={9} style={{ paddingLeft: 0 }}>
          <div style={{ height: "100%", width: "100%" }}>
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
