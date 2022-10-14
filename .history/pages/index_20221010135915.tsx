import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainHome from "../components/MainHome";
import NavBar from "../components/NavBar";
import NewHome from "../components/NewHome";

const Home: NextPage = () => {
  return (
    <div className="min-w-full font-FredokaOneRegular min-h-screen bg-black">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-white bg-black flex flex-col font-FredokaOneRegular z-10 min-h-screen">
          {/* navbar */}
          <div className="sticky top-0 z-50">
            <NavBar />
          </div>
          {/* main */}
          <div>
            {/* hero text */}
            <div className="bg-blue-200">
              <h1 className="text-7xl">
                We Turn Your Experiences into Awsome Memories.
              </h1>
            </div>
          </div>
          {/* footer */}
          <div className="">{/* <MainFooter /> */}</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
