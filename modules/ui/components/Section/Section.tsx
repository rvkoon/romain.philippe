import { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface ISectionProps {
  children?: ReactNode | undefined;
  sx?: SxProps;
}

export default function Section({
  children,
  sx = {},
}: ISectionProps): JSX.Element {
  return <Box sx={{ paddingTop: 4, ...sx }}>{children}</Box>;
}
