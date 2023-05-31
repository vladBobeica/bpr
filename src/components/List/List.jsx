import { Typography, Grid, FormControl, CircularProgress } from "@mui/material";
import DeviceDetails from "../DeviceDetails/DeviceDetails";
import DeviceDetailsPopup from "../DeviceDetails/DeviceDetailsPopup";
import React, { useState } from "react";

const List = ({ items, isLoading }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
    setIsPopupOpen(false);
  };

  return (
    <div
      style={{
        padding: "25px",
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        style={{ marginBottom: "24px", marginTop: "8px" }}
      >
        Streetlights List
      </Typography>
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
            <Grid item key={i} xs={12} style={{ marginBottom: "8px" }}>
              <DeviceDetails item={item} onClick={handleCardClick} />
            </Grid>
          ))}
        </Grid>
      )}
      {selectedItem && (
        <DeviceDetailsPopup
          item={selectedItem}
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default List;
