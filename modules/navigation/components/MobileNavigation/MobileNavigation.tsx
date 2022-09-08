import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NavigationLink } from "../../navigation";
import { Box, styled } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";
import NAVIGATION_LINKS from "../../constants/navigationLinks";
import NavigationBurger from "../NavigationBurger";
import SocialLinks from "../SocialLinks";

const NavigationContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: Boolean }>(({ theme: { palette, spacing }, isOpen }) => ({
  position: "fixed",
  zIndex: 900,
  width: "calc(100vw - 32px)",
  height: "calc(100% - 32px)",
  top: "16px",
  left: "16px",
  display: "flex",
  flexDirection: "column",
  padding: spacing(2),
  transition: "clip-path ease-out 400ms",
  clipPath: isOpen
    ? "ellipse(250vw 250vw at 100% 0)"
    : "ellipse(0 0 at 100% 0)",
  backgroundColor: palette.custom.background.light,
  borderRadius: spacing(1.5),
}));

const NavigationLinks = styled(Box)<{ theme?: any }>(
  ({ theme: { palette, spacing } }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    li: {
      padding: spacing(1.75),
      borderRadius: spacing(1.5),
      display: "flex",
      gap: spacing(3),
      alignItems: "center",
      margin: spacing(1, 0),
      a: {
        display: "block",
        width: "100%",
        fontSize: spacing(3.5),
        fontWeight: 800,
        color: palette.custom.text.onLight,
      },
      "&.isActive": {
        backgroundColor: "#FFF",
        a: {
          color: palette.primary.main,
        },
      },
    },
  })
);

const ContactButton = styled("a")(({ theme: { palette, spacing } }) => ({
  backgroundColor: palette.primary.dark,
  color: "#FFF",
  padding: spacing(2),
  borderRadius: spacing(1.5),
  textAlign: "center",
}));

export default function MobileNavigation(): JSX.Element {
  const { pathname: currentPath } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  function handleToggleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <NavigationBurger
        component="button"
        onClick={handleToggleOpenMenu}
        isOpen={isMenuOpen}
      />
      <NavigationContainer component="nav" isOpen={isMenuOpen}>
        <Box flex={1.5} />
        <NavigationLinks component="ul">
          {NAVIGATION_LINKS.map((link: NavigationLink) => (
            <li
              key={link.name}
              className={(currentPath === link.href && "isActive") || ""}
            >
              <SvgIcon
                component={link.icon}
                sx={{
                  color: "primary.main",
                  fontSize: "h4.fontSize",
                }}
                viewBox="0 0 48 48"
              />
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </NavigationLinks>
        <Box flex={1} />
        <SocialLinks align="center" />
        <ContactButton href="mailto:koontchak@gmail.com">
          Let's talk
        </ContactButton>
      </NavigationContainer>
    </>
  );
}
