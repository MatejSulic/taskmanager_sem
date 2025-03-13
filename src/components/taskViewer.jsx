import { Box, Typography, Paper, Button } from "@mui/material";

const TaskViewer = () => {
  var row = {
    id: 2,
    name: "Fix authentication bug",
    status: "TODO",
    shortDescription: "Critical issue in OAuth login flow",
    longDescription:
      "Users are unable to log in when using third-party OAuth providers due to a session handling issue. The token validation process fails silently causing users to be redirected to the login screen repeatedly. Need to implement proper error reporting and fix token validation.",
    dueDate: "2025-03-13",
    priority: "Critical",
    assignedTo: "Bob Smith",
    parentProjectId: 101,
  };
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
        <Box>
        <Typography variant="h5" sx={{fontWeight:"bold"}}>{row.name}</Typography>
        
        <Typography>{row.longDescription}</Typography>
        </Box>
        <Box>
            <Typography>Assigned to: {row.assignedTo}</Typography>
            <Typography>Team: {row.parentProjectId}</Typography>
            <Typography>Completion date: {row.dueDate}</Typography>
            <Typography>Priority: {row.priority}</Typography>
            <Button variant="contained" sx={{width:"100%",bgcolor:"background.default"}}>
                    <Typography sx={{color:"primary.main"}}>Edit Task</Typography>
            </Button>
            <Box sx={{display:"flex", flexDirection:"row"}}>
            </Box>
            <Box>
                <Button variant="contained" sx={{width:"100%"}}>Move to </Button>
            </Box>
            
        </Box>
      </Box>
    </Box>
  );
};
export default TaskViewer;
