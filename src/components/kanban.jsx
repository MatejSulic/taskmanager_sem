import { Box, Typography } from "@mui/material";
import TaskList from "./taskList";
import LocalStorageService from "../api/localStorageService";



const Kanban = () =>{

    localStorage.clear();
    LocalStorageService.initData();
    return(
        <Box sx={{display:"flex",flexDirection:"column",width:"75%",height:"100%",p:1}}>
            <Typography variant="h3" sx={{color:"primary.main", height:"10%"}}>Kanban</Typography>
            <Box sx={{height:"95%",width:'100%',display:"flex",flexDirection:"row"}}>
                <TaskList listState={"TODO"}/>
                <TaskList listState={"IN PROGRESS"}/>
                <TaskList listState={"DONE"}/>
                
            </Box>
        </Box>
    )
}

export default Kanban;