import Head from "next/head";
import React from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import AppLayout from "../components/AppLayout";

const GlobalStyles = createGlobalStyle`
${reset}
`;

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>project-1</title>
      </Head>
      <GlobalStyles />
      <AppLayout>{Component}</AppLayout>
    </>
  );
};

export default _app;
