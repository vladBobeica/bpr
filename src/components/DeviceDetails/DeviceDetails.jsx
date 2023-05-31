import { Lightbulb } from "@mui/icons-material";
import { Typography, Card, CardContent } from "@mui/material";

const Device = ({ item, onClick }) => {
  const handleCardClick = () => onClick(item);

  return (
    <Card elevation={6} onClick={handleCardClick}>
      <CardContent>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <Lightbulb sx={{ color: "#9ca3af" }} />
          <Typography
            gutterBottom
            variant="h6"
            sx={{ color: "#9ca3af", overflowWrap: "anywhere" }}
            style={{ marginBottom: 0 }}
          >
            {item.type}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          style={{
            color: "#6b7280",
            overflowX: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          ID: <span title={item.id}>{item.id}</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Device;
