import React from "react";
import { Box} from "@mui/material";
import Navbar from "./components/navbar";
import Kanban from "./components/kanban";
import TaskViewer from "./components/taskViewer";
import { DataProvider } from "./data/dataContext";



const App = () => {
 
  return (
    <>
    <DataProvider>
    <Navbar/>
      <Box sx={{display:"flex",flexDirection:"row", maxWidth:"100%",height:"90vh"}}>
        <Kanban/>
        
        <TaskViewer/>

      </Box>
      </DataProvider>
    </>
   
  );
};

export default App;
