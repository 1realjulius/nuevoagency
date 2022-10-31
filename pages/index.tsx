import type { NextPage } from "next";
import Head from "next/head";
import MainHome from "../components/MainHome";

const Home: NextPage = () => {
  return (
    <div className="min-w-full font-FredokaOneRegular min-h-screen bg-black text-white">
      <Head>
        <title>Nuevo Agency</title>
        <meta name="description" content="Nuevo Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="min-h-screen min-w-screen">
        <MainHome />
      </section>
    </div>
  );
};

export default Home;
