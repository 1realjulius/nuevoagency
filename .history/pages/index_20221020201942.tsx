import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ComingSoon from "../components/ComingSoon";
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
      <div className="min-h-screen min-w-screen">
        <MainHome />
      </div>
    </div>
  );
};

export default Home;
