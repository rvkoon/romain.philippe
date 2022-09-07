import HomeIcon from "../images/home.svg";
import AvatarIcon from "../images/avatar.svg";
import ArticleIcon from "../images/article.svg";
import LabIcon from "../images/lab.svg";
import ROUTES from "./routes";
import type { NavigationLink } from "../navigation";

const NAVIGATION_LINKS: NavigationLink[] = [
  { href: ROUTES.HOME, name: "Home", icon: HomeIcon },
  { href: ROUTES.ABOUT, name: "About", icon: AvatarIcon },
  { href: ROUTES.BLOG, name: "Blog", icon: ArticleIcon },
  { href: ROUTES.LAB, name: "Lab", icon: LabIcon },
];

export default NAVIGATION_LINKS;
