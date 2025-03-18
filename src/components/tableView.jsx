import React, { useState } from 'react';
import { useData } from "../data/dataContext";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import LocalStorageService from '../api/localStorageService';
const TableView = () => {
  // Získání dat z dataContextu
  const { employees, teams } = useData();
  const [teamFilter, setTeamFilter] = useState('');

  // Filtrace zaměstnanců na základě vybraného týmu
  const filteredEmployees = teamFilter
    ? employees.filter((employee) => employee.team_id === Number(teamFilter))
    : employees;

  // Handler pro změnu filtru
  const handleTeamChange = (event) => {
    setTeamFilter(event.target.value);
  };

  localStorage.clear();
  return (
    <>
    <Box sx={{p:2,m:2, backgroundColor:"secondary.main", borderRadius:3,minHeight:"80%"}}>
      <FormControl fullWidth>
        <InputLabel id="team-select-label">Select Team</InputLabel>
        <Select
          labelId="team-select-label"
          value={teamFilter}
          label="Select Team"
          onChange={handleTeamChange}
        >
          <MenuItem value="">
            <em>All Teams</em>
          </MenuItem>
          {teams.map((team) => (
            <MenuItem key={team.id} value={team.id}>
              {team.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer>
        <Table sx={{border:1,borderColor:"primary.main"}}>
          <TableHead sx={{backgroundColor:"primary.main"}}>
            <TableRow >
                <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Tasks</TableCell>
              <TableCell>Reporting To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell sx={{color:"primary.main"}}>{employee.id}</TableCell>
                <TableCell sx={{color:"primary.main"}}>{employee.name}</TableCell>
                <TableCell sx={{color:"primary.main"}}>{teams.find((team) => team.id === employee.team_id)?.name}</TableCell>
                <TableCell sx={{color:"primary.main"}}>{employee.tasks_id.join(', ')}</TableCell>
                <TableCell sx={{color:"primary.main"}}>{employee.reportingTo_id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </>
  );
};

export default TableView;
