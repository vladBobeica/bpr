import { useEffect, useState } from "react";
import SearchAppBar from "./components/SearchAppBar";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import { Grid, CssBaseline } from "@mui/material";
import { getItemsData } from "../src/api/index";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemsData().then((data) => {
      console.log(data);
      setItems(data);
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <SearchAppBar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
