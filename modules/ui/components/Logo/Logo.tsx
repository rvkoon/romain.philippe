import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const LogoStyled = styled(Typography)(({ theme: { spacing } }) => ({
  fontWeight: 900,
  fontSize: spacing(2),
  fontFamily: "Poppins",
}));

const DotStyled = styled("span")(({ theme: { spacing, palette } }) => ({
  ["&:after"]: {
    content: '"."',
    display: "inline",
    fontSize: spacing(3),
    lineHeight: 0,
    color: palette.primary.main,
  },
}));

export default function Logo(): JSX.Element {
  return (
    <LogoStyled>
      ROMAIN
      <DotStyled />
      PHILIPPE
    </LogoStyled>
  );
}
