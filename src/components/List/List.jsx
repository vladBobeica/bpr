import { Typography, Grid, FormControl, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const List = ({ items, isLoading }) => {
  return (
    <div
      style={{
        padding: "25px",
        width: "450px",
        height: "calc(100vh - 64px)", // Adjust the height as needed
        overflowY: "auto",
        position: "relative",
      }}
    >
      <Typography variant="h4">Streetlights List</Typography>
      <FormControl
        style={{ marginTop: "30px", minWidth: "80px", marginBottom: "30px" }}
      ></FormControl>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={1}>
          {items?.map((item, i) => (
            <Grid item key={i} xs={12}>
              <DeviceDetails item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default List;
