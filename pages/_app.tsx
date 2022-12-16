import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ready Maker One</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="arcade grow">
          <Component {...pageProps} />
        </div>
        <div className="sticky top-[100vh]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
