import { Box, Typography, Button } from "@mui/material";
import { useData } from "../data/dataContext";
import TaskViewerButtons from "./taskViewerButtons";


const TaskViewer = () => {
  const {activeTask }= useData();
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "25%",
        height: "100%",
        p: 2,
        borderLeft: 1,
        borderColor: "primary.main",
        
      }} 
    >
      <Box
        sx={{
          justifyContent: "center",
          height: "10%",
          width: "100%",
          display: "flex",
        }}
      >
        <Typography variant="h3" sx={{ color: "primary.main" }}>
          Task Viewer
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"space-between", height: "90%",bgcolor:"background.paper",borderRadius:3,m:1,p:1}}>
      {activeTask === null ?(
        <>
        <Typography>Select task to view...</Typography>
        </>
      ) : (
        <>
        <div key={activeTask.id}>
        <Box>
          
        <Typography variant="h5" sx={{fontWeight:"bold"}}>{activeTask.name}</Typography>
        
        <Typography sx={{opacity:0.8, p:1}}>{activeTask.longDescription}</Typography>
        </Box>
        <Box>
            <Typography>Assigned to: {activeTask.assignedTo}</Typography>
            <Typography>Team: {activeTask.parentProjectId}</Typography>
            <Typography>Completion date: {activeTask.dueDate}</Typography>
            <Typography>Priority: {activeTask.priority}</Typography>
            <Box sx={{width:'100%',display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Button variant="contained" sx={{width:"80%",m:1,bgcolor:"background.default"}}>
                    <Typography sx={{color:"primary.main"}}>Edit Task</Typography>
            </Button>
            <TaskViewerButtons/>
            </Box>
            
            
        </Box>
        </div>
        </>
        )}
      </Box>


    </Box>
      
  );
};
export default TaskViewer;
