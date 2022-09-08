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
      ol, ul, li, a, h1, h2, h3, h4, h5, h6{
        list-style: none;
        font-family: "Poppins";
      }
      
      p {
        font-family: "Space Grotesk";
      }
      `,
    },
  },
});

export default THEME;
