import type { NextPage } from "next";
import Head from "next/head";
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
      <div className="min-h-screen min-w-screen">
        {/* Navbar */}
        <div className=" top-0 z-50 ">
          <NavBar />
        </div>
        <div>
          <NewHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
