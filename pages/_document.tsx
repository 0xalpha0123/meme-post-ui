import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="scrollbar">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
