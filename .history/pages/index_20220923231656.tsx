import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Carosel from "../components/Carosel";
import MainHome from "../components/MainHome";
import MainNavbar from "../components/MainNavbar";

const Home: NextPage = () => {
  return (
    <div className="min-w-full min-h-screen">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#161719] min-h-screen min-w-full">
        {/* Navbar */}
        <div className="sticky top-0 z-50 ">
          <MainNavbar />
        </div>
        <div>
          <MainHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
