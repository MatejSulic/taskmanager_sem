import { Box, Button, Paper, Typography } from "@mui/material";
import { useData } from "../data/dataContext"; // Using the context

const TaskViewerButtons = () => {
  const { activeTask, toggleTaskState } = useData();

  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
      {activeTask.status === "TODO" && (
        <Box sx={{ width: "100%", display:"flex", justifyContent:"center"}}>
          <Button
            variant="contained"
            sx={{ width: '50%' }}
            onClick={() => toggleTaskState(activeTask.id, "IN PROGRESS")}
          >
            Progress
          </Button>
        </Box>
      )}
      {activeTask.status === "IN PROGRESS" && (
        <Box sx={{width:"80%", display:"flex",flexDirection:"row" ,justifyContent:"space-between"}}>
          <Button
          sx={{ width: '50%', mr:1}}
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "TODO")}
          >
            To Do
          </Button>
          <Button
          sx={{ width: '50%',ml:1 }}
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "DONE")}
          >
            Done
          </Button>
        </Box>
      )}
      {activeTask.status === "DONE" && (
        <Box sx={{ width:"80%", display:"flex",flexDirection:"row" ,justifyContent:"space-between"}}>
          <Button
          sx={{ width: '50%', mr:1}}
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "IN PROGRESS")}
          >
            Progress
          </Button>
          <Button
          sx={{ width: '50%', ml:1}}
            variant="contained"
            onClick={() => {
              // Remove task using the context function
              toggleTaskState(activeTask.id, "DELETED"); // You might want to handle task deletion
            }}
          >
            Delete
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TaskViewerButtons;
