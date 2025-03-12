import React from "react";
import { Box, Container } from "@mui/material";
import Navbar from "./components/navbar";
import Kanban from "./components/kanban";



const App = () => {
  const data = [
    { id: 1, title: "Card 1", text: "Toto je první karta" },
    { id: 2, title: "Card 2", text: "Toto je druhá karta" },
    { id: 3, title: "Card 3", text: "Toto je třetí karta" },
    { id: 4, title: "Card 4", text: "Toto je čtvrtá karta" },
    { id: 5, title: "Card 5", text: "Toto je pátá karta" },
  ];
  return (
    <>
    <Navbar/>
      <Box sx={{display:"flex", flexDirection:"row", maxWidth:"100%",height:"85vh"}}>
        <Kanban/>

        <Box sx={{ width:"25%",height:'100%',m:1,border:1,borderColor:"secondary.main"}}>
          
        </Box>

      </Box>
    </>
   
  );
};

export default App;
