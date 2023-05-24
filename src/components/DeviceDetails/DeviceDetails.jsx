import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
} from "@mui/material";
const Device = ({ item }) => {
  return (
    <Card elevation={6}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {item.id}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">{item.type}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Device;
