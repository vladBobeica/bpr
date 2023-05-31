import { useContext, useEffect, useState } from "react";
import AuthContext from "./contexts/Auth/AuthContext";
import SearchAppBar from "./components/SearchAppBar/SearchAppBar";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import LoginPage from "./components/Login/LoginPage";
import { Grid, CssBaseline } from "@mui/material";
import { getItemsData } from "../src/api/index";

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { username, password } = useContext(AuthContext);

  useEffect(() => {
    if (username && password) {
      getItemsData(username, password)
        .then((data) => {
          setItems(data);
        })
        .catch((error) => {
          console.log("Error fetching the device list: ", error);
        })
        .finally(() => {
          setIsLoading(false);
          console.log("Fetched data");
        });
    }
  }, [username, password]);

  useEffect(() => setFilteredItems(filterDevices(items)), [items]);

  const handleLoginSuccess = () => setLoggedIn(true);

  const handleSearch = (value) => {
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
        <Grid
          item
          xs={12}
          md={4}
          style={{ paddingLeft: 0, position: "relative", zIndex: 1 }}
        >
          <div style={{ height: "100%", overflowY: "auto" }}>
            <List items={filteredItems} isLoading={isLoading} />
          </div>
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingLeft: 0 }}>
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
