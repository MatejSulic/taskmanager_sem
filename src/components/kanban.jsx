import { Box, Typography } from "@mui/material";
import TaskList from "./taskList";



const Kanban = () =>{
    return(
        <Box sx={{display:"flex",flexDirection:"column",width:"75%",height:"100%",p:2}}>
            <Typography variant="h3" sx={{color:"primary.main", height:"10%"}}>Kanban</Typography>
            <Box sx={{height:"90%",width:'100%',display:"flex",flexDirection:"row"}}>
                <TaskList/>
                <TaskList/>
                <TaskList/>
                
            </Box>
        </Box>
    )
}

export default Kanban;