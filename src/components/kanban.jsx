import { Box, Typography } from "@mui/material";
import TaskList from "./taskList";



const Kanban = () =>{
    return(
        <Box sx={{display:"flex",flexDirection:"column",width:"75%",height:"100%",m:1,p:2,border:1,borderColor:"secondary.main"}}>
            <Typography variant="h3" sx={{color:"text.primary", height:"10%"}}>Kanban</Typography>
            <Box sx={{height:"90%",width:'100%',display:"flex",flexDirection:"row"}}>
                <TaskList/>
                <TaskList/>
                <TaskList/>
                
            </Box>
        </Box>
    )
}

export default Kanban;