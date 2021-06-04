import { Fragment } from "react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Sigmar+One&display=swap"
          rel="stylesheet"
        />
        <title>TamyShop</title>
      </Head>
      <div className="bg-gray-100 flex flex-col min-h-screen">
        <div className="flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </Fragment>
  );
}

export default MyApp;
