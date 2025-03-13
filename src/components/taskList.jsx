import { Box, List, ListItem, Typography } from "@mui/material";
import tasks from "../test_data";
import MyCard from "./card";

const TaskList = () => {

    return (
        <>
            <Box sx={{height:"95%",width: "33%", p: 0,pb:2, m: 1, border: 1,borderRadius:3, borderColor: "primary.main", overflow:"hidden"}}>
                    <Box sx={{ display:"flex",justifyContent:"center",alignItems:"center",height:"10%",width: "100%",  bgcolor: "primary.main"}}>
                        <Typography variant="h5" sx={{fontWeight:"bold"}}>LIST</Typography>
                    </Box>
                    <Box sx={{display:"flex",height:"90%"}}>
                    <List sx={{width:"100%",m:0, overflow:"scroll"}}>
                        {tasks.map((row, index) => (
                            <ListItem key={index}>
                                <MyCard row={row} />
                            </ListItem>
                        ))}
                    </List>
                    </Box>
            </Box>
        </>
    );
}

export default TaskList;