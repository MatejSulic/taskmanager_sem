import React from "react";
import { Box} from "@mui/material";
import Navbar from "./components/navbar";
import KanbanPage from "./pages/kanbanPage";
import { DataProvider } from "./data/dataContext";
import TeamManagementPage from "./pages/teamManagementPage";
import TaskManagementPage from "./pages/taskManagementPage";
import {Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";




const App = () => {
 
  
  return (
    <>
    <DataProvider>
    <Router>
    <Navbar/>
      <Box sx={{display:"flex",flexDirection:"row", maxWidth:"100%",height:"90vh"}}>
        <Routes>
          <Route path="/kanbanPage" element={<KanbanPage/>}/>
          <Route path="/teamManagementPage" element={<TeamManagementPage/>}/>
          <Route path="/taskManagementPage" element={<TaskManagementPage/>}/>
          <Route path="*" element={<KanbanPage/>}/>
        </Routes>
      </Box>
      </Router>
      </DataProvider>
    </>
   
  );
};

export default App;
