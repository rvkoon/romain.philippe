import { ReactElement } from "react";
import { Box, styled } from "@mui/system";
import Logo from "../Logo";

const HeaderStyled = styled(Box)(({ theme: { spacing } }) => ({
  height: spacing(10),
  paddingInline: spacing(2),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export default function Header(): ReactElement {
  return (
    <HeaderStyled component="header">
      <Logo />
    </HeaderStyled>
  );
}
