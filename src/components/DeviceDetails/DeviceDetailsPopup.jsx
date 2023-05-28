import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

const DeviceDetailsPopup = ({ item, onClose }) => {
  const {
    id,
    type,
    location,
    refStreetlightModel,
    status,
    refDevice,
    controllingMethod,
    source,
    dataProvider,
  } = item;

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle sx={{ fontSize: "1.2rem" }}>ID:{id}</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Type: {type}</Typography>
        <Typography variant="body1">
          Location: {location?.value?.coordinates?.value.join(", ")}
        </Typography>
        <Typography variant="body1">
          Streetlight Model: {refStreetlightModel?.value}
        </Typography>
        <Typography variant="body1">Status: {status?.value}</Typography>
        <Typography variant="body1">Device: {refDevice?.value}</Typography>
        <Typography variant="body1">
          Controlling Method: {controllingMethod?.value}
        </Typography>
        <Typography variant="body1">Source: {source?.value}</Typography>
        <Typography variant="body1">
          Data Provider: {dataProvider?.value}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default DeviceDetailsPopup;
