import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import TableView from "./tableView";
import TreeView from "./treeView";

const TeamManagement = () => {
  var [activeView, setActiveView] = useState("TableView");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "75%",
        height: "100%",
        p: 2,
      }}
    >
      <Typography variant="h3" sx={{ color: "primary.main", height: "10%" }}>
        Team Management
      </Typography>
      <Box
        sx={{
          height: "90%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            sx={{ m: 1, width: "10%", color: "secondary.main" }}
            variant="contained"
            onClick={() => setActiveView("TableView")}
          >
            Table
          </Button>
          <Button
            sx={{ m: 1, width: "10%", color: "secondary.main" }}
            variant="contained"
            onClick={() => setActiveView("TreeView")}
          >
            Tree
          </Button>
        </Box>
        {activeView === "TableView" ? (
          <>
            <TableView />
          </>
        ) : (
          <>
            <TreeView />
          </>
        )}
      </Box>
    </Box>
  );
};

export default TeamManagement;
