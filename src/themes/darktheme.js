import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/rubik';
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FF6500',
      contrastText: '#0B192C',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#000000',
    },
    background: {
      default: '#0B192C',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      disabled: '#6c6c6c',
    }
  },
  typography: {
    fontFamily: "Rubik Variable, Consolas, Monaco"  
  },
});

export default darkTheme;