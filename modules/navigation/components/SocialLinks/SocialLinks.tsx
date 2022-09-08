import SvgIcon from "@mui/material/SvgIcon";
import GithubIcon from "../../images/github.svg";
import LinkedinIcon from "../../images/linkedin.svg";
import CodepenIcon from "../../images/codepen.svg";
import { Box, spacing, styled } from "@mui/system";
import Link from "next/link";

type Align = "left" | "center";

interface ISocialLinksProps {
  align?: Align;
}

const SocialLinksContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "align",
})<{ align: Align }>(({ theme: { spacing }, align }) => ({
  textAlign: align,
  marginBottom: spacing(3),
  svg: {
    margin: spacing(2, 3),
  },
  ...(align === "left" && {
    "a:first-of-type svg": {
      margin: spacing(2, 3, 2, 0),
    },
  }),
}));

export default function SocialLinks({
  align = "left",
}: ISocialLinksProps): JSX.Element {
  return (
    <SocialLinksContainer align={align}>
      <p>Follow me on</p>
      <Link href="https://www.linkedin.com/in/romain-philippe-milleret-12b00ba1/">
        <a target="_blank" rel="noopener noreferrer">
          <SvgIcon
            component={LinkedinIcon}
            sx={{
              color: "primary.dark",
              fontSize: "h5.fontSize",
            }}
            viewBox="0 0 24 24"
          />
        </a>
      </Link>
      <Link href="https://codepen.io/rvkoon">
        <a target="_blank" rel="noopener noreferrer">
          <SvgIcon
            component={CodepenIcon}
            sx={{
              color: "primary.dark",
              fontSize: "h5.fontSize",
            }}
            viewBox="0 0 32 32"
          />
        </a>
      </Link>
      <Link href="https://github.com/rvkoon">
        <a target="_blank" rel="noopener noreferrer">
          <SvgIcon
            component={GithubIcon}
            sx={{
              color: "primary.dark",
              fontSize: "h5.fontSize",
            }}
            viewBox="0 0 24 24"
          />
        </a>
      </Link>
    </SocialLinksContainer>
  );
}
