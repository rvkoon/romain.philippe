import { createElement, ReactNode } from "react";
import { ThemeProvider} from "@mui/system";
import THEME from "../constants/theme"

type Props = {
  children: ReactNode
}

const ThemeWrapper = ({children} : Props) => createElement(ThemeProvider, {theme: THEME, children})

export default ThemeWrapper