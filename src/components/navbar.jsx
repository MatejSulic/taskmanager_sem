import { Box, Button, Typography } from "@mui/material"


const Navbar = () => {
    return(
        <Box sx={{display:"flex",width:"100%",justifyContent:"space-around",alignContent:"center",}}>
            <Box sx={{width:"33%"}}>
                <Button variant="contained" sx={{width:"100%",borderRadius:"0"}}>
                    <Typography>KanBan Board</Typography>
                </Button>
            </Box>
            <Box sx={{width:"33%"}}>
                <Button variant="contained" sx={{width:"100%",borderRadius:"0"}}>
                    <Typography>Team Management</Typography>
                </Button>
            </Box>
            <Box sx={{width:"33%"}}>
                <Button variant="contained" sx={{width:"100%",borderRadius:"0"}}>
                    <Typography>Task Management</Typography>
                </Button>
            </Box>
        
        </Box>

    )
}

export default Navbar;