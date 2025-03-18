import { Box, Button, Paper, Typography } from "@mui/material";
import { useData } from "../data/dataContext"; // Using the context

const TaskViewerButtons = () => {
  const { activeTask, toggleTaskState } = useData();

  return (
    <Box>
      {activeTask.status === "TODO" && (
        <Box sx={{ width: "100%" }}>
          <Button
            variant="contained"
            sx={{ width: '100%' }}
            onClick={() => toggleTaskState(activeTask.id, "IN PROGRESS")}
          >
            Move to IN PROGRESS
          </Button>
        </Box>
      )}
      {activeTask.status === "IN PROGRESS" && (
        <Box>
          <Button
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "TODO")}
          >
            Move to TODO
          </Button>
          <Button
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "DONE")}
          >
            Move to DONE
          </Button>
        </Box>
      )}
      {activeTask.status === "DONE" && (
        <Box>
          <Button
            variant="contained"
            onClick={() => toggleTaskState(activeTask.id, "IN PROGRESS")}
          >
            Move to IN PROGRESS
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              // Remove task using the context function
              toggleTaskState(activeTask.id, "DELETED"); // You might want to handle task deletion
            }}
          >
            Delete Task
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default TaskViewerButtons;
