import { Header } from "@Ui";
import { HomeHero } from "@Home";
import { MobileNavigation } from "@Navigation";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <MobileNavigation />
      <HomeHero />
    </>
  );
}
