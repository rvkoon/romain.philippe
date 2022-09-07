import { Box, styled } from "@mui/system";

const NavigationBurger = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})<{ isOpen: Boolean }>(({ theme: { spacing, palette }, isOpen }) => ({
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
}));

export default NavigationBurger;
