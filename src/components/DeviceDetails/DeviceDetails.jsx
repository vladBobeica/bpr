import { Box, Typography, Card, CardContent } from "@mui/material";
const Device = ({ item, isHighlighted, onClick }) => {
  const cardStyle = {
    elevation: isHighlighted ? 10 : 6,
  };

  const handleCardClick = () => {
    onClick(item);
  };
  return (
    <Card elevation={6} sx={cardStyle} onClick={handleCardClick}>
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
