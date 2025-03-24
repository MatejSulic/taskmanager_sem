import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import TableView from "./tableView";
import TreeView from "./treeView";
import TaskViewer from "./taskViewer";

const TeamManagement = () => {
  var [activeView, setActiveView] = useState("TableView");

  return (
    
      
      <Box sx={{display:"flex",flexDirection:"column",width:"75%",height:"100%",p:1}}>
      <Typography variant="h3" sx={{color:"primary.main", height:"10%"}}>Team Management</Typography>
      <Box sx={{height:"95%",width:'100%',display:"flex",flexDirection:"column"}}>
      <Box>
          <Button variant="contained" sx={{ m: 1 }} onClick={() => setActiveView("TableView")}>
            Table
          </Button>
          <Button variant="contained" sx={{ m: 1 }} onClick={() => setActiveView("TreeView")}>
            Tree
          </Button>
        </Box>
        {activeView === "TableView" && <TableView></TableView>}
        {activeView === "TreeView" && <TreeView></TreeView>}
          
      </Box>
  </Box>
  );
};

export default TeamManagement;
