import { Box, Button, Typography } from "@mui/material";
import TaskList from "./taskList";



const TeamManagement = () =>{
    return(
        <Box sx={{display:"flex",flexDirection:"column",width:"75%",height:"100%",p:2}}>
            <Typography variant="h3" sx={{color:"primary.main", height:"10%"}}>Team Management</Typography>
            <Box sx={{height:"90%",width:'100%',display:"flex",flexDirection:"column"}}>
                <Box sx={{display:"flex",flexDirection:"row",width:"15%"}}>
                    <Button variant="contained">Table</Button>
                    <Button variant="contained">Tree</Button>
                </Box>
                
                
                
            </Box>
        </Box>
    )
}

export default TeamManagement;