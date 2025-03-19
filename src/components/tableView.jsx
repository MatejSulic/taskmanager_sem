import React, { useState } from 'react';
import { useData } from "../data/dataContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, FormControl, InputLabel, Box, Paper, TablePagination } from '@mui/material';
import LocalStorageService from '../api/localStorageService';

const TableView = () => {
  const { employees, teams } = useData();
  const [teamFilter, setTeamFilter] = useState('');
  const [page, setPage] = useState(0);
  const rowsPerPage = 6;

  const filteredEmployees = teamFilter
    ? employees.filter((employee) => employee.team_id === Number(teamFilter))
    : employees;

  const handleTeamChange = (event) => {
    setTeamFilter(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ p: 3, m: 3, backgroundColor: "secondary.light", borderRadius: 2, minHeight: "80%" }}>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Select
          labelId="team-select-label"
          value={teamFilter}
          onChange={handleTeamChange}
          displayEmpty
          variant="outlined"
          sx={{ backgroundColor: "white", borderRadius: 1, color: "primary.main" }}
        >
          <MenuItem value="">
            <em style={{ color: "primary.main" }}>All Teams</em>
          </MenuItem>
          {teams.map((team) => (
            <MenuItem key={team.id} value={team.id}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "primary.main" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Team</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Tasks</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Reporting To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee) => (
              <TableRow key={employee.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: "action.hover" } }}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{teams.find((team) => team.id === employee.team_id)?.name}</TableCell>
                <TableCell>{employee.tasks_id.join(', ')}</TableCell>
                <TableCell>{employees.find((e) => e.id === employee.reportingTo_id)?.name || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={filteredEmployees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default TableView;