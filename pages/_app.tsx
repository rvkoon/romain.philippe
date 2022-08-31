import type { AppProps } from "next/app";
import { ThemeWrapper } from "@Ui";
import "../public/main.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
}

export default MyApp;
