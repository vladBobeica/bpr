import {
  InputLabel,
  Typography,
  Grid,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useState } from "react";
import DeviceDetails from "../DeviceDetails/DeviceDetails";

const List = () => {
  const [type, setType] = useState();
  const items = [
    { name: "Light1" },
    { name: "Light2" },
    { name: "Light3" },
    { name: "Light34" },
    { name: "Light12" },
    { name: "Light22" },
  ];
  return (
    <div style={{ padding: "25px" }}>
      <Typography variant="h4">List</Typography>
      <FormControl
        style={{ marginTop: "30px", minWidth: "80px", marginBottom: "30px" }}
      >
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="Devices">Devices</MenuItem>
          <MenuItem value="Getways">Getways</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3}>
        {items?.map((item, i) => (
          <Grid item key={i} xs={12}>
            <DeviceDetails item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
