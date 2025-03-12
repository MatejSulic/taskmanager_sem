import { Table,TableBody, TableCell, TableRow, TableHead, Button} from "@mui/material";

const MyTable = ({data}) =>{
    return(
        <Table>
        <TableHead>
          <TableRow sx={{bgcolor:"secondary.main"}}>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Text</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) =>
          <TableRow>
            <TableCell>
              {row.id}
            </TableCell>
            <TableCell>
              {row.title}
            </TableCell>
            <TableCell>
              {row.text}
            </TableCell>
            <TableCell>
              <Button variant="contained" sx={{bgcolor:"secondary.main"}}>
                Remove
              </Button>
            </TableCell>
          </TableRow>
          )}
        </TableBody>
      </Table>
    )

}
export default MyTable;