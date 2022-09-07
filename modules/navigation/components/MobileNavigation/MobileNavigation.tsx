import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NavigationLink } from "../../navigation";
import { Box, styled } from "@mui/system";
import SvgIcon from "@mui/material/SvgIcon";
import NAVIGATION_LINKS from "../../constants/navigationLinks";
import NavigationBurger from "../NavigationBurger";

const NavigationContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: Boolean }>(({ isOpen }) => ({
  position: "fixed",
  zIndex: 900,
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
  display: "flex",
  padding: "16px",
  transition: "clip-path ease-out 400ms",
  clipPath: isOpen
    ? "ellipse(250vw 250vw at 100% 0)"
    : "ellipse(0 0 at 100% 0)",
}));

const NavigationLinks = styled(Box)<{ theme?: any }>(
  ({ theme: { palette, spacing, typography } }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: palette.custom.background.light,
    borderRadius: spacing(1.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: spacing(2),
    margin: "auto",
    li: {
      padding: spacing(3),
      borderRadius: spacing(1.5),
      margin: spacing(0.5, 0),
      display: "flex",
      gap: spacing(4),
      alignItems: "center",
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
      </NavigationContainer>
    </>
  );
}
