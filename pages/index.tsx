import { Header } from "@Ui";
import { MobileNavigation } from "@Navigation";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MobileNavigation />
    </>
  );
};

export default Home;
