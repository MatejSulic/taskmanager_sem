import { Box, Button, Paper, Typography } from "@mui/material";
import { useData } from "../data/dataContext";
import LocalStorageService from "../api/localStorageService";

const TaskViewerButtons = () => {
  const { activeTask } = useData();
  return (
    <>
      <Box>
        {activeTask.status === "TODO" && (
          <Box sx={{width:"100%"}}>
            <Button variant="contained" sx={{width:'100%'}} onClick={()=> LocalStorageService.updateTaskStatus(activeTask.id,"IN PROGRESS")}>Move to IN PROGRESS</Button>
          </Box>
        )}
        {activeTask.status === "IN PROGRESS" && (
          <Box>
          <Button variant="contained" onClick={()=> LocalStorageService.updateTaskStatus(activeTask.id,"TODO")}>Move to TODO</Button>
          <Button variant="contained" onClick={()=> LocalStorageService.updateTaskStatus(activeTask.id,"DONE")}>Move to DONE</Button>
        </Box>
        )}
        {activeTask.status === "DONE" && (
            <Box>
            <Button variant="contained" onClick={()=> LocalStorageService.updateTaskStatus(activeTask.id,"IN PROGRESS")}>Move to IN PROGRESS</Button>
            <Button variant="contained" onClick={() => LocalStorageService.removeDataRow(activeTask.id)}>Delete Task</Button>
          </Box>
        )}
      </Box>
    </>
  );
};

export default TaskViewerButtons;
