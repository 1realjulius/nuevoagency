import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Carosel from "../components/Carosel";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen flex max-h-screen flex-col items-center justify-center ">
        <Carosel />
      </div>
    </div>
  );
};

export default Home;
