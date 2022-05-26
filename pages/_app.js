import "../styles/global.css";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zeta</title>
        <meta name="description" content="Zeta" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}
