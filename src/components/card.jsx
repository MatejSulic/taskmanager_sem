import { Box, Paper, Typography } from "@mui/material";
import { useData } from "../data/dataContext";


const MyCard = ({ row }) => {
  let cardColor = "background.paper";

  switch (row.priority) {
    case "Low":
      cardColor = "green";
      break;
    case "Medium":
      cardColor = "yellow";
      break;
    case "High":
      cardColor = "orange";
      break;
    case "Critical":
      cardColor = "red";
      break;
    default:
      cardColor = "background.paper";
      break;
  }

  const {setActiveTask} = useData();
  return (
    <>
      <Paper
        onClick={() => setActiveTask(row)}
        sx={{
          width: "90%",
          height: "auto",
          minHeight: "20vh",
          bgcolor: "backgroud.paper",
          borderLeft: 8,
          borderColor: cardColor,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "opacity 0.5s", 
          "&:hover": {
            opacity: 0.7,
            cursor: "pointer",
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          {row.name}
        </Typography>

        <Typography sx={{ color: "text.primary" }}>
          {row.shortDescription}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "text.primary" }}>
            {row.assignedTo}
          </Typography>
          <Typography sx={{ color: "text.primary" }}>{row.dueDate}</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default MyCard;
