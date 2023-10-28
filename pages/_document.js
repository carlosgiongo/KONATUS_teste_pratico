import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "root/config";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body
          style={{
            background: `linear-gradient(to bottom, #ede5dd, #d0bfad)`,
            height: "100%",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
