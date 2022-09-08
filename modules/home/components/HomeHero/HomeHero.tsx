import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Section } from "@Ui";

const Baseline = styled(Typography)(({ theme: { palette, spacing } }) => ({
  color: palette.primary.main,
  fontFamily: "Inter",
  fontWeight: 900,
  fontSize: spacing(5.5),
  letterSpacing: -1,
  textAlign: "center",
}));

export default function HomeHero(): JSX.Element {
  return (
    <Section>
      <Baseline component="h1" variant="h2">
        Creative{" "}
        <Box component="span" color="primary.dark">
          Front
          <br />
          End
        </Box>{" "}
        Developer
      </Baseline>
    </Section>
  );
}
