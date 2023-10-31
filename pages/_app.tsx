import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <App.Wrapper>
      <Head>
        <title>Qualia Interview</title>
        <meta name="description" content="Qualia Interview 1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </App.Wrapper>
  );
}

App.Wrapper = styled.div``;
