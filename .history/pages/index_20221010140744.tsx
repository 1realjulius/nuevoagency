import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import MainHome from "../components/MainHome";
import NavBar from "../components/NavBar";
import NewHome from "../components/NewHome";

const Home: NextPage = () => {
  return (
    <div className="min-w-full font-FredokaOneRegular min-h-screen bg-black text-white">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        {/* navbar */}
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
      </nav>
      <main className="px-6 py-20">
        {/* main */}
        <div className="h-[80vh] flex flex-col items-center justify-center bg-green-200">
          {/* hero text */}
          <div className="bg-blue-200">
            <h1 className="text-5xl md:text-8xl">
              <span>We Turn </span>
              <span>Experiences </span>
              <span>into Awsome </span>
              <span>Memories.</span>
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
