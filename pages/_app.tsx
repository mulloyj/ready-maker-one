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
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="grow">
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
