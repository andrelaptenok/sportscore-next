import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>SportScore</title>
        <meta name="description" content="Sport score" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </React.Fragment>
  );
};

export default Home;
