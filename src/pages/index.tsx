import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';

import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Neu Vibes</title>
        <meta name="description" content="Discover the latest Music Videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-1/2 min-h-screen mx-auto">
        <h1 className="font-black text-center uppercase text-8xl animate-pulse text-amber-300">
          Welcome
        </h1>

      </div>
    </>
  );
};

export default Home;
