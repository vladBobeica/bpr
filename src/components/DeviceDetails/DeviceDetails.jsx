import { Box, Typography, Card, CardContent } from "@mui/material";
const Device = ({ item, isHighlighted }) => {
  const cardStyle = {
    elevation: isHighlighted ? 10 : 6,
  };
  return (
    <Card elevation={6} sx={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="h5" sx={{ overflowWrap: "anywhere" }}>
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
