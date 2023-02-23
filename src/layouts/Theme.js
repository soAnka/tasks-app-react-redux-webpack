import { createTheme } from "@mui/material/styles";
import { indigo, pink, cyan, lightBlue, brown } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo[600],
    },
    secondary: {
      main: lightBlue[600],
    },
    favColor: {
      main: pink[500],
    },
    completedTaskColor: {
      main: cyan[200],
      contrastText: "rgba(0,0,0,0.8)",
    },
    uncompletedTaskColor: {
      main: brown[800],
      contrastText: "rgba(255,255,255,1)",
    },
  },
});
