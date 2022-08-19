import { createTheme } from "@mui/system";
import COLORS from "./colors";
import TYPOGRAPHY from "./typography";

const THEME = createTheme({
  palette: COLORS,
  spacing: 8,
  typography: TYPOGRAPHY,
});

export default THEME;
