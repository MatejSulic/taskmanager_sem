import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate();  // Create the navigate function

  const handleNavigate = (route) => {
    navigate(route);  // Navigate to the given route
  };

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around", alignContent: "center" }}>
      <Box sx={{ width: "33%" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "0" }}
          onClick={() => handleNavigate("/kanbanPage")}
        >
          <Typography>KanBan Board</Typography>
        </Button>
      </Box>
      <Box sx={{ width: "33%" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "0" }}
          onClick={() => handleNavigate("/teamManagementPage")}
        >
          <Typography>Team Management</Typography>
        </Button>
      </Box>
      <Box sx={{ width: "33%" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "0" }}
          onClick={() => handleNavigate("/taskManagementPage")}
        >
          <Typography>Task Management</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
