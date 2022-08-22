import { createTheme } from "@mui/material";
import COLORS from "./colors";
import TYPOGRAPHY from "./typography";

const THEME = createTheme({
  palette: COLORS,
  spacing: 8,
  typography: TYPOGRAPHY,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      body {
        font-family: "Poppins"
      }
      `,
    },
  },
});

export default THEME;
