import { Box, Typography, Button } from "@mui/material";
import { useData } from "../data/dataContext";
import TaskViewerButtons from "./taskViewerButtons";

const EmployeeViewer = () => {
  const { activeEmp} = useData();
  const { employees, teams } = useData();
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "90%",
          bgcolor: "background.paper",
          borderRadius: 3,
          m: 1,
          p: 1,
        }}
      >
        {activeEmp === null ? (
          <>
            <Typography>Select employee to view...</Typography>
          </>
        ) : (
          <>
            <div key={activeEmp.id}>
            <Box
              sx={{
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent:"space-between",
              }}
            >
                  {/* { id: 1, name: "Alice Johnson", team_id: 1, tasks_id: [1], reportingTo_id: 5 }, */}
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {activeEmp.name}
                  </Typography>

                  <Typography>Member of team: {teams.find((e) => e.id === activeEmp.team_id)?.name || "N/A"}</Typography>
                  <Typography>Reporting to: {employees.find((e) => e.id === activeEmp.reportingTo_id)?.name || "N/A"}</Typography>

                  <Button variant="outlined">Edit</Button>
                </Box>
                
            </Box>
            </div>
          </>
        )}
      </Box>
    </Box>
  );
};
export default EmployeeViewer;
