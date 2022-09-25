import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Carosel from "../components/Carosel";
import MainHome from "../components/MainHome";
import MainNavbar from "../components/MainNavbar";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-800 overflow-y-hidden overflow-x-hidden">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative ">
        <div className="sticky top-2 z-10">
          <MainNavbar />
        </div>
        <MainHome />
      </div>
    </div>
  );
};

export default Home;
