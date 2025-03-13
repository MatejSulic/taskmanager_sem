import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "./components/navbar";
import Kanban from "./components/kanban";
import TaskViewer from "./components/taskViewer";



const App = () => {
 
  return (
    <>
    <Navbar/>
      <Box sx={{display:"flex",flexDirection:"row", flexDirection:"row", maxWidth:"100%",height:"90vh"}}>
        <Kanban/>
        
        <TaskViewer/>

      </Box>
    </>
   
  );
};

export default App;
