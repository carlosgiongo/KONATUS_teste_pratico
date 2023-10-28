import Head from "next/head";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import NextNProgress from "nextjs-progressbar";
import { TITLE, META_DESCRIPTION } from "root/config";
import ThemeProvider from "components/ThemeProvider";

const App = ({ Component, pageProps }) => {
  if (typeof window === "undefined") {
    enableStaticRendering(true);
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <DefaultSeo title={TITLE} description={META_DESCRIPTION} />
      <NextNProgress />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
