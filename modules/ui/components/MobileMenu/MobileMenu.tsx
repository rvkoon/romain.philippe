import { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, styled } from "@mui/system";

type Link = {
  href: string;
  name: string;
};

const MENU_LINKS: Link[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/blog", name: "Blog" },
  { href: "/lab", name: "Lab" },
];

const MenuButtonStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ theme?: any; isOpen: Boolean }>(
  ({ theme: { spacing, palette }, isOpen }) => ({
    height: spacing(6),
    width: spacing(6),
    backgroundColor: palette.custom.background.light,
    borderRadius: spacing(2),
    border: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: spacing(2),
    right: spacing(2),
    zIndex: 1000,
    "&:before, &:after": {
      content: '""',
      height: 2,
      width: spacing(3),
      display: "block",
      borderRadius: 2,
      backgroundColor: palette.primary.dark,
      margin: isOpen ? 0 : 4,
      transition: `margin ease-out 
    ${isOpen ? "100ms" : "300ms"}${""}
    ${!isOpen ? "100ms" : ""},${""}
    transform ease-out${""}
    ${isOpen ? "300ms" : "100ms"}${""}
    ${isOpen ? "100ms" : ""}`,
    },
    ...(isOpen && {
      "&:before": {
        transform: "translateY(1px) rotate(45deg)",
      },
      "&:after": {
        transform: "translateY(-1px) rotate(-45deg)",
      },
    }),
  })
);

const MenuContainerStyled = styled(Box, {
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
  transition: "clip-path ease-out 200ms",
  clipPath: isOpen
    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    : "polygon(100% 0, 100% 0, 100% 0, 100% 0)",
}));

const MenuNavStyled = styled(Box)<{ theme?: any }>(
  ({ theme: { palette, spacing } }) => ({
    width: "100%",
    height: "100%",
    backgroundColor: palette.custom.background.light,
    borderRadius: spacing(2),
    display: "flex",
    padding: spacing(2),
    ul: {
      width: "100%",
      margin: "auto",
      li: {
        padding: spacing(2),
        borderRadius: spacing(2),
        margin: spacing(2, 0),
        a: {
          fontSize: spacing(4),
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
    },
  })
);

export default function MobileMenu(): ReactElement {
  const { pathname: currentPath } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  function handleToggleOpenMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <MenuButtonStyled
        component="button"
        onClick={handleToggleOpenMenu}
        isOpen={isMenuOpen}
      />
      <MenuContainerStyled isOpen={isMenuOpen}>
        <MenuNavStyled component="nav">
          <ul>
            {MENU_LINKS.map((link: Link) => (
              <li className={(currentPath === link.href && "isActive") || ""}>
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </MenuNavStyled>
      </MenuContainerStyled>
    </>
  );
}
