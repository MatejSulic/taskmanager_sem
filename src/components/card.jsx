import { Box, Typography} from "@mui/material";

const MyCard = ({row}) => {
  return (
    <>
    <Box sx={{width:"100%",height:"20vh",border:1,borderColor:"primary.main",p:2}}>
      <Typography variant="h5" sx={{color:"text.primary"}}>{row.id} {row.name}</Typography>
      <Typography variant="h7" sx={{color:"text.primary"}}>{row.shortDescription}</Typography>
      <Typography variant="h5" sx={{color:"text.primary"}}>{row.dueDate}</Typography>
    </Box>
    </>

  );
};

export default MyCard;
